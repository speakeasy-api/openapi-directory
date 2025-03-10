<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class OrderAddress
{
    /**
     * CLDR country code (e.g. "US").
     * 
     * @var ?string $country
     */
	#[\JMS\Serializer\Annotation\SerializedName('country')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $country = null;
    
    /**
     * Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States 
     * 
     * @var ?array<string> $fullAddress
     */
	#[\JMS\Serializer\Annotation\SerializedName('fullAddress')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $fullAddress = null;
    
    /**
     * Whether the address is a post office box.
     * 
     * @var ?bool $isPostOfficeBox
     */
	#[\JMS\Serializer\Annotation\SerializedName('isPostOfficeBox')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isPostOfficeBox = null;
    
    /**
     * City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
     * 
     * @var ?string $locality
     */
	#[\JMS\Serializer\Annotation\SerializedName('locality')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $locality = null;
    
    /**
     * Postal Code or ZIP (e.g. "94043").
     * 
     * @var ?string $postalCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('postalCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $postalCode = null;
    
    /**
     * Name of the recipient.
     * 
     * @var ?string $recipientName
     */
	#[\JMS\Serializer\Annotation\SerializedName('recipientName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $recipientName = null;
    
    /**
     * Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     * 
     * @var ?string $region
     */
	#[\JMS\Serializer\Annotation\SerializedName('region')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $region = null;
    
    /**
     * Street-level part of the address.
     * 
     * @var ?array<string> $streetAddress
     */
	#[\JMS\Serializer\Annotation\SerializedName('streetAddress')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $streetAddress = null;
    
	public function __construct()
	{
		$this->country = null;
		$this->fullAddress = null;
		$this->isPostOfficeBox = null;
		$this->locality = null;
		$this->postalCode = null;
		$this->recipientName = null;
		$this->region = null;
		$this->streetAddress = null;
	}
}
