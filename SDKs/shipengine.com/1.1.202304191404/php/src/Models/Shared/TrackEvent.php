<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * TrackEvent - A track event
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class TrackEvent
{
    /**
     * Carrier detail code
     * 
     * @var string $carrierDetailCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('carrier_detail_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $carrierDetailCode;
    
    /**
     * Carrier timestamp for the event, it is assumed to be the local time of where the event occurred.
     * 
     * @var ?\DateTime $carrierOccurredAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('carrier_occurred_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $carrierOccurredAt = null;
    
    /**
     * Carrier status code
     * 
     * @var string $carrierStatusCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('carrier_status_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $carrierStatusCode;
    
    /**
     * carrier status description
     * 
     * @var string $carrierStatusDescription
     */
	#[\JMS\Serializer\Annotation\SerializedName('carrier_status_description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $carrierStatusDescription;
    
    /**
     * City locality
     * 
     * @var string $cityLocality
     */
	#[\JMS\Serializer\Annotation\SerializedName('city_locality')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $cityLocality;
    
    /**
     * Company Name
     * 
     * @var ?string $companyName
     */
	#[\JMS\Serializer\Annotation\SerializedName('company_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $companyName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('country_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $countryCode = null;
    
    /**
     * Event description
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * Event Code
     * 
     * @var ?string $eventCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('event_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $eventCode = null;
    
    /**
     * Latitude coordinate of tracking event.
     * 
     * @var ?float $latitude
     */
	#[\JMS\Serializer\Annotation\SerializedName('latitude')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $latitude = null;
    
    /**
     * Longitude coordinate of tracking event.
     * 
     * @var ?float $longitude
     */
	#[\JMS\Serializer\Annotation\SerializedName('longitude')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $longitude = null;
    
    /**
     * Timestamp for carrier event
     * 
     * @var \DateTime $occurredAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('occurred_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $occurredAt;
    
    /**
     * Postal code
     * 
     * @var string $postalCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('postal_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $postalCode;
    
    /**
     * Signer information
     * 
     * @var ?string $signer
     */
	#[\JMS\Serializer\Annotation\SerializedName('signer')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $signer = null;
    
    /**
     * State province
     * 
     * @var string $stateProvince
     */
	#[\JMS\Serializer\Annotation\SerializedName('state_province')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $stateProvince;
    
	#[\JMS\Serializer\Annotation\SerializedName('status_code')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\StatusCodeEnum>')]
    public StatusCodeEnum $statusCode;
    
    /**
     * Event Status Description
     * 
     * @var string $statusDescription
     */
	#[\JMS\Serializer\Annotation\SerializedName('status_description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $statusDescription;
    
	public function __construct()
	{
		$this->carrierDetailCode = "";
		$this->carrierOccurredAt = null;
		$this->carrierStatusCode = "";
		$this->carrierStatusDescription = "";
		$this->cityLocality = "";
		$this->companyName = null;
		$this->countryCode = null;
		$this->description = null;
		$this->eventCode = null;
		$this->latitude = null;
		$this->longitude = null;
		$this->occurredAt = new \DateTime();
		$this->postalCode = "";
		$this->signer = null;
		$this->stateProvince = "";
		$this->statusCode = \OpenAPI\OpenAPI\Models\Shared\StatusCodeEnum::UN;
		$this->statusDescription = "";
	}
}
