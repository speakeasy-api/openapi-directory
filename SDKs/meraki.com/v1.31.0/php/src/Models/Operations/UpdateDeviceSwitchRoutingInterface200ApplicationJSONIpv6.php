<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateDeviceSwitchRoutingInterface200ApplicationJSONIpv6 - IPv6 addressing
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateDeviceSwitchRoutingInterface200ApplicationJSONIpv6
{
    /**
     * IPv6 address
     * 
     * @var ?string $address
     */
	#[\JMS\Serializer\Annotation\SerializedName('address')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $address = null;
    
    /**
     * Assignment mode
     * 
     * @var ?string $assignmentMode
     */
	#[\JMS\Serializer\Annotation\SerializedName('assignmentMode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $assignmentMode = null;
    
    /**
     * IPv6 gateway
     * 
     * @var ?string $gateway
     */
	#[\JMS\Serializer\Annotation\SerializedName('gateway')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $gateway = null;
    
    /**
     * IPv6 subnet
     * 
     * @var ?string $prefix
     */
	#[\JMS\Serializer\Annotation\SerializedName('prefix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $prefix = null;
    
	public function __construct()
	{
		$this->address = null;
		$this->assignmentMode = null;
		$this->gateway = null;
		$this->prefix = null;
	}
}
