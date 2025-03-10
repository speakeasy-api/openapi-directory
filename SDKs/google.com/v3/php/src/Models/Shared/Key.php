<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Key - Key of a result.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Key
{
    /**
     * The number of days in advance the user wants to book the itinerary. If `advanceBookingWindow` is not a value of the `aggregateBy` parameter in the request call, then the `advanceBookingWindow` field is not returned in the `Key`.
     * 
     * @var ?int $advanceBookingWindow
     */
	#[\JMS\Serializer\Annotation\SerializedName('advanceBookingWindow')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $advanceBookingWindow = null;
    
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Date $checkinDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('checkinDate')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Date')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Date $checkinDate = null;
    
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Date $date
     */
	#[\JMS\Serializer\Annotation\SerializedName('date')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Date')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Date $date = null;
    
    /**
     * The user’s device type. If `deviceType` is not a value of the `aggregateBy` parameter in the request call, then the `deviceType` field is not returned in the `Key`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\KeyDeviceTypeEnum $deviceType
     */
	#[\JMS\Serializer\Annotation\SerializedName('deviceType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\KeyDeviceTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?KeyDeviceTypeEnum $deviceType = null;
    
    /**
     * CLDR region code of the country/region of the hotel. If `hotelRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `hotelRegionCode` field is not returned in the `Key`.
     * 
     * @var ?string $hotelRegionCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('hotelRegionCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $hotelRegionCode = null;
    
    /**
     * The number of nights for the itinerary. If `lengthOfStayDays` is not a value of the `aggregateBy` parameter in the request call, then the `lengthOfStayDays` field is not returned in the `Key`.
     * 
     * @var ?int $lengthOfStayDays
     */
	#[\JMS\Serializer\Annotation\SerializedName('lengthOfStayDays')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $lengthOfStayDays = null;
    
    /**
     * The total occupancy of the itinerary. If `occupancy` is not a value of the `aggregateBy` parameter in the request call, then the `occupancy` field is not returned in the `Key`.
     * 
     * @var ?int $occupancy
     */
	#[\JMS\Serializer\Annotation\SerializedName('occupancy')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $occupancy = null;
    
    /**
     * Partner's hotel ID. If `partnerHotelId` is not a value of the `aggregateBy` parameter in the request call, then the `partnerHotelId` field is not returned in the `Key`.
     * 
     * @var ?string $partnerHotelId
     */
	#[\JMS\Serializer\Annotation\SerializedName('partnerHotelId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $partnerHotelId = null;
    
    /**
     * ISO 3116 region code of the country/region of the user. If `userRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `userRegionCode` field is not returned in the `Key`.
     * 
     * @var ?string $userRegionCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('userRegionCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $userRegionCode = null;
    
	public function __construct()
	{
		$this->advanceBookingWindow = null;
		$this->checkinDate = null;
		$this->date = null;
		$this->deviceType = null;
		$this->hotelRegionCode = null;
		$this->lengthOfStayDays = null;
		$this->occupancy = null;
		$this->partnerHotelId = null;
		$this->userRegionCode = null;
	}
}
