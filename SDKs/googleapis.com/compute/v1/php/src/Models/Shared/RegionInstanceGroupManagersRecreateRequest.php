<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class RegionInstanceGroupManagersRecreateRequest
{
    /**
     * The URLs of one or more instances to recreate. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
     * 
     * @var ?array<string> $instances
     */
	#[\JMS\Serializer\Annotation\SerializedName('instances')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $instances = null;
    
	public function __construct()
	{
		$this->instances = null;
	}
}
