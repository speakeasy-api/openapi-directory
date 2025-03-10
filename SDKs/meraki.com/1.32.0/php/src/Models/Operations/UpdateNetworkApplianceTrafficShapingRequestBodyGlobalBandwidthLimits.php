<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits - Global per-client bandwidth limit
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits
{
    /**
     * The download bandwidth limit in Kbps. (0 represents no limit.)
     * 
     * @var ?int $limitDown
     */
	#[\JMS\Serializer\Annotation\SerializedName('limitDown')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $limitDown = null;
    
    /**
     * The upload bandwidth limit in Kbps. (0 represents no limit.)
     * 
     * @var ?int $limitUp
     */
	#[\JMS\Serializer\Annotation\SerializedName('limitUp')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $limitUp = null;
    
	public function __construct()
	{
		$this->limitDown = null;
		$this->limitUp = null;
	}
}
