<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleChromePolicyVersionsV1NumericRangeConstraint - A constraint on upper and/or lower bounds, with at least one being set.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleChromePolicyVersionsV1NumericRangeConstraint
{
    /**
     * Maximum value.
     * 
     * @var ?string $maximum
     */
	#[\JMS\Serializer\Annotation\SerializedName('maximum')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $maximum = null;
    
    /**
     * Minimum value.
     * 
     * @var ?string $minimum
     */
	#[\JMS\Serializer\Annotation\SerializedName('minimum')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $minimum = null;
    
	public function __construct()
	{
		$this->maximum = null;
		$this->minimum = null;
	}
}
