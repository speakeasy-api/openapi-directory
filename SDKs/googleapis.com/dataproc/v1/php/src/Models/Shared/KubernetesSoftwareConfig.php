<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * KubernetesSoftwareConfig - The software configuration for this Dataproc cluster running on Kubernetes.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class KubernetesSoftwareConfig
{
    /**
     * The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must be specified.
     * 
     * @var ?array<string, string> $componentVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('componentVersion')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $componentVersion = null;
    
    /**
     * The properties to set on daemon config files.Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark: spark-defaults.confFor more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
     * 
     * @var ?array<string, string> $properties
     */
	#[\JMS\Serializer\Annotation\SerializedName('properties')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $properties = null;
    
	public function __construct()
	{
		$this->componentVersion = null;
		$this->properties = null;
	}
}
