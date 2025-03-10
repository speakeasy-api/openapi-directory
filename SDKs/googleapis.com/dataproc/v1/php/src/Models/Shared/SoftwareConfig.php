<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SoftwareConfig - Specifies the selection and config of software inside the cluster.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SoftwareConfig
{
    /**
     * Optional. The version of software inside the cluster. It must be one of the supported Dataproc Versions (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported_dataproc_versions), such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it defaults to the latest Debian version.
     * 
     * @var ?string $imageVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageVersion = null;
    
    /**
     * Optional. The set of components to activate on the cluster.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SoftwareConfigOptionalComponentsEnum> $optionalComponents
     */
	#[\JMS\Serializer\Annotation\SerializedName('optionalComponents')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Shared\SoftwareConfigOptionalComponentsEnum>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $optionalComponents = null;
    
    /**
     * Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
     * 
     * @var ?array<string, string> $properties
     */
	#[\JMS\Serializer\Annotation\SerializedName('properties')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $properties = null;
    
	public function __construct()
	{
		$this->imageVersion = null;
		$this->optionalComponents = null;
		$this->properties = null;
	}
}
