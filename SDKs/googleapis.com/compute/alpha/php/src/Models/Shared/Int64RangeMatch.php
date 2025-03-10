<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Int64RangeMatch - HttpRouteRuleMatch criteria for field values that must stay within the specified integer range.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Int64RangeMatch
{
    /**
     * The end of the range (exclusive) in signed long integer format.
     * 
     * @var ?string $rangeEnd
     */
	#[\JMS\Serializer\Annotation\SerializedName('rangeEnd')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $rangeEnd = null;
    
    /**
     * The start of the range (inclusive) in signed long integer format.
     * 
     * @var ?string $rangeStart
     */
	#[\JMS\Serializer\Annotation\SerializedName('rangeStart')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $rangeStart = null;
    
	public function __construct()
	{
		$this->rangeEnd = null;
		$this->rangeStart = null;
	}
}
