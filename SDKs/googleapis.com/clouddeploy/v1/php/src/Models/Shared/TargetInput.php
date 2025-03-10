<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TargetInput - A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TargetInput
{
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     * 
     * @var ?array<string, string> $annotations
     */
	#[\JMS\Serializer\Annotation\SerializedName('annotations')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $annotations = null;
    
    /**
     * Information specifying an Anthos Cluster.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AnthosCluster $anthosCluster
     */
	#[\JMS\Serializer\Annotation\SerializedName('anthosCluster')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AnthosCluster')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AnthosCluster $anthosCluster = null;
    
    /**
     * Optional. Description of the `Target`. Max length is 255 characters.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * 
     * @var ?string $etag
     */
	#[\JMS\Serializer\Annotation\SerializedName('etag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $etag = null;
    
    /**
     * Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ExecutionConfig> $executionConfigs
     */
	#[\JMS\Serializer\Annotation\SerializedName('executionConfigs')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ExecutionConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $executionConfigs = null;
    
    /**
     * Information specifying a GKE Cluster.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GkeCluster $gke
     */
	#[\JMS\Serializer\Annotation\SerializedName('gke')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GkeCluster')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GkeCluster $gke = null;
    
    /**
     * Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     * 
     * @var ?array<string, string> $labels
     */
	#[\JMS\Serializer\Annotation\SerializedName('labels')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $labels = null;
    
    /**
     * Information specifying a multiTarget.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\MultiTarget $multiTarget
     */
	#[\JMS\Serializer\Annotation\SerializedName('multiTarget')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\MultiTarget')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?MultiTarget $multiTarget = null;
    
    /**
     * Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Optional. Whether or not the `Target` requires approval.
     * 
     * @var ?bool $requireApproval
     */
	#[\JMS\Serializer\Annotation\SerializedName('requireApproval')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $requireApproval = null;
    
    /**
     * Information specifying where to deploy a Cloud Run Service.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CloudRunLocation $run
     */
	#[\JMS\Serializer\Annotation\SerializedName('run')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CloudRunLocation')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CloudRunLocation $run = null;
    
	public function __construct()
	{
		$this->annotations = null;
		$this->anthosCluster = null;
		$this->description = null;
		$this->etag = null;
		$this->executionConfigs = null;
		$this->gke = null;
		$this->labels = null;
		$this->multiTarget = null;
		$this->name = null;
		$this->requireApproval = null;
		$this->run = null;
	}
}
