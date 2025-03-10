<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InstanceGroupManagersCreateInstancesRequest - InstanceGroupManagers.createInstances
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InstanceGroupManagersCreateInstancesRequest
{
    /**
     * [Required] List of specifications of per-instance configs.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\PerInstanceConfig> $instances
     */
	#[\JMS\Serializer\Annotation\SerializedName('instances')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\PerInstanceConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $instances = null;
    
	public function __construct()
	{
		$this->instances = null;
	}
}
