<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ShipmentLocationsPOSTVO - Java type: com.noosh.nooshapi.vo.ShipmentLocationsPOSTVO
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ShipmentLocationsPOSTVO
{
	#[\JMS\Serializer\Annotation\SerializedName('location_id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $locationId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('shipment_id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $shipmentId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('spec_id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $specId = null;
    
	public function __construct()
	{
		$this->locationId = null;
		$this->shipmentId = null;
		$this->specId = null;
	}
}
