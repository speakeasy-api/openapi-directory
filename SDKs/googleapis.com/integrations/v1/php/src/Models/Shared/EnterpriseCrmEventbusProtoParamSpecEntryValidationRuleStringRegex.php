<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex - Rule used to validate strings.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex
{
    /**
     * Whether the regex matcher is applied exclusively (if true, matching values will be rejected).
     * 
     * @var ?bool $exclusive
     */
	#[\JMS\Serializer\Annotation\SerializedName('exclusive')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $exclusive = null;
    
    /**
     * The regex applied to the input value(s).
     * 
     * @var ?string $regex
     */
	#[\JMS\Serializer\Annotation\SerializedName('regex')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $regex = null;
    
	public function __construct()
	{
		$this->exclusive = null;
		$this->regex = null;
	}
}
