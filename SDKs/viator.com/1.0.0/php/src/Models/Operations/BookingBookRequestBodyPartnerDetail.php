<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * BookingBookRequestBodyPartnerDetail - Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
 * 
 * 
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class BookingBookRequestBodyPartnerDetail
{
    /**
     * **unique alphanumeric reference code** for the distributor
     * 
     * - Merchant API partners must pass a `distributorRef` at the order (A.K.A. 'itinerary') level in the `partnerDetail` object. The `distributorRef` passed must be alphanumeric and unique to bookings made by the merchant.
     * - Passing an existing `distributorRef`: If an existing `distributorRef` is passed, the booking with the matching `distributorRef` will be returned in the response and a new booking will not be made. The fields in the response are identical to the response for a new booking.
     * 
     * 
     * @var ?string $distributorRef
     */
	#[\JMS\Serializer\Annotation\SerializedName('distributorRef')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $distributorRef = null;
    
	public function __construct()
	{
		$this->distributorRef = null;
	}
}
