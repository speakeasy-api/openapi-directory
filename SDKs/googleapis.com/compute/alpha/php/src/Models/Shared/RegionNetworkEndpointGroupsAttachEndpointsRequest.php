<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class RegionNetworkEndpointGroupsAttachEndpointsRequest
{
    /**
     * The list of network endpoints to be attached.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint> $networkEndpoints
     */
	#[\JMS\Serializer\Annotation\SerializedName('networkEndpoints')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\NetworkEndpoint>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $networkEndpoints = null;
    
	public function __construct()
	{
		$this->networkEndpoints = null;
	}
}
