<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * RouterAdvertisedIpRange - Description-tagged IP ranges for the router to advertise.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class RouterAdvertisedIpRange
{
    /**
     * User-specified description for the IP range.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * The IP range to advertise. The value must be a CIDR-formatted string.
     * 
     * @var ?string $range
     */
	#[\JMS\Serializer\Annotation\SerializedName('range')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $range = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->range = null;
	}
}
