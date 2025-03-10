<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LoyaltyProgramExpirationPolicy - Describes when the loyalty program expires.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LoyaltyProgramExpirationPolicy
{
    /**
     * The number of months before points expire, in `P[n]M` RFC 3339 duration format. For example, a value of `P12M` represents a duration of 12 months. 
     * 
     * Points are valid through the last day of the month in which they are scheduled to expire. For example, with a  `P12M` duration, points earned on July 6, 2020 expire on August 1, 2021.
     * 
     * @var string $expirationDuration
     */
	#[\JMS\Serializer\Annotation\SerializedName('expiration_duration')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $expirationDuration;
    
	public function __construct()
	{
		$this->expirationDuration = "";
	}
}
