<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class SendMessageRequestBody3LocationLocation
{
    /**
     * Address of the location. Only displayed if `name` is present.
     * 
     * @var ?string $address
     */
	#[\JMS\Serializer\Annotation\SerializedName('address')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $address = null;
    
    /**
     * Latitude of the location.
     * 
     * @var float $lat
     */
	#[\JMS\Serializer\Annotation\SerializedName('lat')]
    #[\JMS\Serializer\Annotation\Type('float')]
    public float $lat;
    
    /**
     * Longitude of the location.
     * 
     * @var float $long
     */
	#[\JMS\Serializer\Annotation\SerializedName('long')]
    #[\JMS\Serializer\Annotation\Type('float')]
    public float $long;
    
    /**
     * Name of the location.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->address = null;
		$this->lat = 0;
		$this->long = 0;
		$this->name = null;
	}
}
