<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class BookingHotels200ApplicationJSONData
{
    /**
     * **natural-language address** of hotel pick-up point
     * 
     * @var ?string $address
     */
	#[\JMS\Serializer\Annotation\SerializedName('address')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $address = null;
    
    /**
     * ignore (Viator only)
     * 
     * @var ?string $brand
     */
	#[\JMS\Serializer\Annotation\SerializedName('brand')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $brand = null;
    
    /**
     * **natural-language name** of the destination that *this* hotel pick-up point pertains to
     * 
     * @var ?string $city
     */
	#[\JMS\Serializer\Annotation\SerializedName('city')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $city = null;
    
    /**
     * **unique numeric identifer** of the destination that *this* hotel pick-up point pertains to
     * 
     * @var ?int $destinationId
     */
	#[\JMS\Serializer\Annotation\SerializedName('destinationId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $destinationId = null;
    
    /**
     * ignore (Viator only)
     * 
     * @var ?string $hotelString
     */
	#[\JMS\Serializer\Annotation\SerializedName('hotelString')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $hotelString = null;
    
    /**
     * **identifier** of *this* hotel pick-up point`
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * **numeric latitude component** of *this* hotel pick-up point's geolocation
     * 
     * @var ?float $latitude
     */
	#[\JMS\Serializer\Annotation\SerializedName('latitude')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $latitude = null;
    
    /**
     * **numeric longitude component** of *this* hotel pick-up point's geolocation
     * 
     * @var ?float $longitude
     */
	#[\JMS\Serializer\Annotation\SerializedName('longitude')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $longitude = null;
    
    /**
     * **natural-language name** of hotel pick-up point
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * **natural-language notes** about *this* hotel pick-up point
     * 
     * @var ?string $notes
     */
	#[\JMS\Serializer\Annotation\SerializedName('notes')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $notes = null;
    
    /**
     * **phone number** of *this* hotel pick-up point
     * 
     * @var ?string $phone
     */
	#[\JMS\Serializer\Annotation\SerializedName('phone')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phone = null;
    
    /**
     * **post code** of *this* hotel pick-up point
     * 
     * @var ?string $postcode
     */
	#[\JMS\Serializer\Annotation\SerializedName('postcode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $postcode = null;
    
    /**
     * **array** of product codes pertaining to *this* hotel pick-up point
     * 
     * @var ?array<string> $productCodes
     */
	#[\JMS\Serializer\Annotation\SerializedName('productCodes')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $productCodes = null;
    
    /**
     * **sort-order** of *this* hotel pick-up point
     * 
     * @var ?int $sortOrder
     */
	#[\JMS\Serializer\Annotation\SerializedName('sortOrder')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $sortOrder = null;
    
	public function __construct()
	{
		$this->address = null;
		$this->brand = null;
		$this->city = null;
		$this->destinationId = null;
		$this->hotelString = null;
		$this->id = null;
		$this->latitude = null;
		$this->longitude = null;
		$this->name = null;
		$this->notes = null;
		$this->phone = null;
		$this->postcode = null;
		$this->productCodes = null;
		$this->sortOrder = null;
	}
}
