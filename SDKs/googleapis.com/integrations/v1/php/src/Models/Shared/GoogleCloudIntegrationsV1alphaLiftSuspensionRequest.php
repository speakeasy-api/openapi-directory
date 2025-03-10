<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudIntegrationsV1alphaLiftSuspensionRequest - Request for lift Suspension
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudIntegrationsV1alphaLiftSuspensionRequest
{
    /**
     * User passed in suspension result and will be used to control workflow execution branching behavior by setting up corresponnding edge condition with suspension result. For example, if you want to lift the suspension, you can pass "Approved", or if you want to reject the suspension and terminate workfloe execution, you can pass "Rejected" and terminate the workflow execution with configuring the edge condition.
     * 
     * @var ?string $suspensionResult
     */
	#[\JMS\Serializer\Annotation\SerializedName('suspensionResult')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $suspensionResult = null;
    
	public function __construct()
	{
		$this->suspensionResult = null;
	}
}
