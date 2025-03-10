<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateNetworkSwitchSettingsQosRulesOrderRequestBody
{
    /**
     * A list of quality of service rule IDs arranged in order in which they should be processed by the switch.
     * 
     * @var array<string> $ruleIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('ruleIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $ruleIds;
    
	public function __construct()
	{
		$this->ruleIds = [];
	}
}
