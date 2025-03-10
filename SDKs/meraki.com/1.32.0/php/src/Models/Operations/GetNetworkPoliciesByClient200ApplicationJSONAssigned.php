<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetNetworkPoliciesByClient200ApplicationJSONAssigned
{
    /**
     * id of policy
     * 
     * @var ?string $groupPolicyId
     */
	#[\JMS\Serializer\Annotation\SerializedName('groupPolicyId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $groupPolicyId = null;
    
    /**
     * name of policy
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * ssid
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\GetNetworkPoliciesByClient200ApplicationJSONAssignedSsid> $ssid
     */
	#[\JMS\Serializer\Annotation\SerializedName('ssid')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\GetNetworkPoliciesByClient200ApplicationJSONAssignedSsid>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $ssid = null;
    
    /**
     * type of policy
     * 
     * @var ?string $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $type = null;
    
	public function __construct()
	{
		$this->groupPolicyId = null;
		$this->name = null;
		$this->ssid = null;
		$this->type = null;
	}
}
