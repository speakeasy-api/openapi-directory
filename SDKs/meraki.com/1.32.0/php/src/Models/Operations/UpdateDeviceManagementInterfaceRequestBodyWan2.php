<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateDeviceManagementInterfaceRequestBodyWan2 - WAN 2 settings (only for MX devices)
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateDeviceManagementInterfaceRequestBodyWan2
{
    /**
     * Up to two DNS IPs.
     * 
     * @var ?array<string> $staticDns
     */
	#[\JMS\Serializer\Annotation\SerializedName('staticDns')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $staticDns = null;
    
    /**
     * The IP of the gateway on the WAN.
     * 
     * @var ?string $staticGatewayIp
     */
	#[\JMS\Serializer\Annotation\SerializedName('staticGatewayIp')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $staticGatewayIp = null;
    
    /**
     * The IP the device should use on the WAN.
     * 
     * @var ?string $staticIp
     */
	#[\JMS\Serializer\Annotation\SerializedName('staticIp')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $staticIp = null;
    
    /**
     * The subnet mask for the WAN.
     * 
     * @var ?string $staticSubnetMask
     */
	#[\JMS\Serializer\Annotation\SerializedName('staticSubnetMask')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $staticSubnetMask = null;
    
    /**
     * Configure the interface to have static IP settings or use DHCP.
     * 
     * @var ?bool $usingStaticIp
     */
	#[\JMS\Serializer\Annotation\SerializedName('usingStaticIp')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $usingStaticIp = null;
    
    /**
     * The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.
     * 
     * @var ?int $vlan
     */
	#[\JMS\Serializer\Annotation\SerializedName('vlan')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $vlan = null;
    
    /**
     * Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum $wanEnabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('wanEnabled')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum $wanEnabled = null;
    
	public function __construct()
	{
		$this->staticDns = null;
		$this->staticGatewayIp = null;
		$this->staticIp = null;
		$this->staticSubnetMask = null;
		$this->usingStaticIp = null;
		$this->vlan = null;
		$this->wanEnabled = null;
	}
}
