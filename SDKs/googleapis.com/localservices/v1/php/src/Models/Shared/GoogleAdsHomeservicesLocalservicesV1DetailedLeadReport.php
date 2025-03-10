<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport - A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
{
    /**
     * Identifies account that received the lead.
     * 
     * @var ?string $accountId
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountId = null;
    
    /**
     * Conatiner for aggregator specific information if lead is for an aggregator GLS account.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1AggregatorInfo $aggregatorInfo
     */
	#[\JMS\Serializer\Annotation\SerializedName('aggregatorInfo')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1AggregatorInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleAdsHomeservicesLocalservicesV1AggregatorInfo $aggregatorInfo = null;
    
    /**
     * Container for booking lead specific information.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1BookingLead $bookingLead
     */
	#[\JMS\Serializer\Annotation\SerializedName('bookingLead')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1BookingLead')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleAdsHomeservicesLocalservicesV1BookingLead $bookingLead = null;
    
    /**
     * Business name associated to the account.
     * 
     * @var ?string $businessName
     */
	#[\JMS\Serializer\Annotation\SerializedName('businessName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $businessName = null;
    
    /**
     * Whether the lead has been charged.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum $chargeStatus
     */
	#[\JMS\Serializer\Annotation\SerializedName('chargeStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum $chargeStatus = null;
    
    /**
     * Currency code.
     * 
     * @var ?string $currencyCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('currencyCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $currencyCode = null;
    
    /**
     * Dispute status related to the lead.
     * 
     * @var ?string $disputeStatus
     */
	#[\JMS\Serializer\Annotation\SerializedName('disputeStatus')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $disputeStatus = null;
    
    /**
     * Location of the associated account's home city.
     * 
     * @var ?string $geo
     */
	#[\JMS\Serializer\Annotation\SerializedName('geo')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $geo = null;
    
    /**
     * Lead category (e.g. hvac, plumber)
     * 
     * @var ?string $leadCategory
     */
	#[\JMS\Serializer\Annotation\SerializedName('leadCategory')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $leadCategory = null;
    
    /**
     * Timestamp of when the lead was created.
     * 
     * @var ?string $leadCreationTimestamp
     */
	#[\JMS\Serializer\Annotation\SerializedName('leadCreationTimestamp')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $leadCreationTimestamp = null;
    
    /**
     * Unique identifier of a Detailed Lead Report.
     * 
     * @var ?string $leadId
     */
	#[\JMS\Serializer\Annotation\SerializedName('leadId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $leadId = null;
    
    /**
     * Price of the lead (available only after it has been charged).
     * 
     * @var ?float $leadPrice
     */
	#[\JMS\Serializer\Annotation\SerializedName('leadPrice')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $leadPrice = null;
    
    /**
     * Lead type.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum $leadType
     */
	#[\JMS\Serializer\Annotation\SerializedName('leadType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum $leadType = null;
    
    /**
     * Container for message lead specific information.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1MessageLead $messageLead
     */
	#[\JMS\Serializer\Annotation\SerializedName('messageLead')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1MessageLead')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleAdsHomeservicesLocalservicesV1MessageLead $messageLead = null;
    
    /**
     * Container for phone lead specific information.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1PhoneLead $phoneLead
     */
	#[\JMS\Serializer\Annotation\SerializedName('phoneLead')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleAdsHomeservicesLocalservicesV1PhoneLead')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleAdsHomeservicesLocalservicesV1PhoneLead $phoneLead = null;
    
    /**
     * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeZone $timezone
     */
	#[\JMS\Serializer\Annotation\SerializedName('timezone')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeZone')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleTypeTimeZone $timezone = null;
    
	public function __construct()
	{
		$this->accountId = null;
		$this->aggregatorInfo = null;
		$this->bookingLead = null;
		$this->businessName = null;
		$this->chargeStatus = null;
		$this->currencyCode = null;
		$this->disputeStatus = null;
		$this->geo = null;
		$this->leadCategory = null;
		$this->leadCreationTimestamp = null;
		$this->leadId = null;
		$this->leadPrice = null;
		$this->leadType = null;
		$this->messageLead = null;
		$this->phoneLead = null;
		$this->timezone = null;
	}
}
