<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ResponsePolicyRulesPatchResponse - Successful response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ResponsePolicyRulesPatchResponse
{
    /**
     * Elements common to every response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ResponseHeader $header
     */
	#[\JMS\Serializer\Annotation\SerializedName('header')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ResponseHeader')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ResponseHeader $header = null;
    
    /**
     * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRule $responsePolicyRule
     */
	#[\JMS\Serializer\Annotation\SerializedName('responsePolicyRule')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ResponsePolicyRule')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ResponsePolicyRule $responsePolicyRule = null;
    
	public function __construct()
	{
		$this->header = null;
		$this->responsePolicyRule = null;
	}
}
