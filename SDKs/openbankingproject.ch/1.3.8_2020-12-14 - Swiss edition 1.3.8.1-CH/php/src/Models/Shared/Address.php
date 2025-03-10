<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Address
{
	#[\JMS\Serializer\Annotation\SerializedName('buildingNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $buildingNumber = null;
    
    /**
     * ISO 3166 ALPHA2 country code.
     * 
     * @var string $country
     */
	#[\JMS\Serializer\Annotation\SerializedName('country')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $country;
    
	#[\JMS\Serializer\Annotation\SerializedName('postCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $postCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('streetName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $streetName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('townName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $townName = null;
    
	public function __construct()
	{
		$this->buildingNumber = null;
		$this->country = "";
		$this->postCode = null;
		$this->streetName = null;
		$this->townName = null;
	}
}
