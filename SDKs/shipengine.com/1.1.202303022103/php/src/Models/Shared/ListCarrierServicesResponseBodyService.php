<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListCarrierServicesResponseBodyService - A service offered by the carrier
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListCarrierServicesResponseBodyService
{
	#[\JMS\Serializer\Annotation\SerializedName('carrier_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $carrierCode = null;
    
    /**
     * A string that uniquely identifies the carrier
     * 
     * @var ?string $carrierId
     */
	#[\JMS\Serializer\Annotation\SerializedName('carrier_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $carrierId = null;
    
    /**
     * Supports domestic shipping
     * 
     * @var ?bool $domestic
     */
	#[\JMS\Serializer\Annotation\SerializedName('domestic')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $domestic = null;
    
    /**
     * Supports international shipping.
     * 
     * @var ?bool $international
     */
	#[\JMS\Serializer\Annotation\SerializedName('international')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $international = null;
    
    /**
     * Carrier supports multiple packages per shipment
     * 
     * @var ?bool $isMultiPackageSupported
     */
	#[\JMS\Serializer\Annotation\SerializedName('is_multi_package_supported')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isMultiPackageSupported = null;
    
    /**
     * User friendly service name
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * service code
     * 
     * @var ?string $serviceCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('service_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceCode = null;
    
	public function __construct()
	{
		$this->carrierCode = null;
		$this->carrierId = null;
		$this->domestic = null;
		$this->international = null;
		$this->isMultiPackageSupported = null;
		$this->name = null;
		$this->serviceCode = null;
	}
}
