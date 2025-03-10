<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateNetworkSiteToSiteVpnRequestBody
{
    /**
     * The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodyHubs> $hubs
     */
	#[\JMS\Serializer\Annotation\SerializedName('hubs')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodyHubs>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $hubs = null;
    
    /**
     * The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodyModeEnum $mode
     */
	#[\JMS\Serializer\Annotation\SerializedName('mode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodyModeEnum>')]
    public UpdateNetworkSiteToSiteVpnRequestBodyModeEnum $mode;
    
    /**
     * The list of subnets and their VPN presence.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodySubnets> $subnets
     */
	#[\JMS\Serializer\Annotation\SerializedName('subnets')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodySubnets>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $subnets = null;
    
	public function __construct()
	{
		$this->hubs = null;
		$this->mode = \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteToSiteVpnRequestBodyModeEnum::HUB;
		$this->subnets = null;
	}
}
