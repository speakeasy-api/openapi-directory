<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6 - The IPv6 settings of the interface.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6
{
    /**
     * The IPv6 address of the interface. Required if assignmentMode is included and set as 'static'. Must not be included if assignmentMode is 'eui-64'.
     * 
     * @var ?string $address
     */
	#[\JMS\Serializer\Annotation\SerializedName('address')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $address = null;
    
    /**
     * The IPv6 assignment mode for the interface. Can be either 'eui-64' or 'static'.
     * 
     * @var ?string $assignmentMode
     */
	#[\JMS\Serializer\Annotation\SerializedName('assignmentMode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $assignmentMode = null;
    
    /**
     * The IPv6 default gateway of the interface. Required if prefix is defined and this is the first interface with IPv6 configured for the stack.
     * 
     * @var ?string $gateway
     */
	#[\JMS\Serializer\Annotation\SerializedName('gateway')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $gateway = null;
    
    /**
     * The IPv6 prefix of the interface. Required if IPv6 object is included and interface does not already have ipv6.prefix configured
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
