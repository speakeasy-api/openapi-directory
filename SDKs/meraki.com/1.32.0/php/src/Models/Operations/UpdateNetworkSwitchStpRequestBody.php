<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateNetworkSwitchStpRequestBody
{
    /**
     * The spanning tree protocol status in network
     * 
     * @var ?bool $rstpEnabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('rstpEnabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $rstpEnabled = null;
    
    /**
     * STP bridge priority for switches/stacks or switch profiles. An empty array will clear the STP bridge priority settings.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequestBodyStpBridgePriority> $stpBridgePriority
     */
	#[\JMS\Serializer\Annotation\SerializedName('stpBridgePriority')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSwitchStpRequestBodyStpBridgePriority>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $stpBridgePriority = null;
    
	public function __construct()
	{
		$this->rstpEnabled = null;
		$this->stpBridgePriority = null;
	}
}
