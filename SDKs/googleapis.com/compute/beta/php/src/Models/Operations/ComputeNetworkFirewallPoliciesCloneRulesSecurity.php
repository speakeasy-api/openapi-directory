<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ComputeNetworkFirewallPoliciesCloneRulesSecurity
{
	#[SpeakeasyMetadata('security:option=true')]
    public ?ComputeNetworkFirewallPoliciesCloneRulesSecurityOption1 $option1 = null;
    
	#[SpeakeasyMetadata('security:option=true')]
    public ?ComputeNetworkFirewallPoliciesCloneRulesSecurityOption2 $option2 = null;
    
	public function __construct()
	{
		$this->option1 = null;
		$this->option2 = null;
	}
}
