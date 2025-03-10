<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ProxyV1ServicePhoneNumber - Created
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ProxyV1ServicePhoneNumber
{
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource.
     * 
     * @var ?string $accountSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('account_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountSid = null;
    
    /**
     * The capabilities of the phone number.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ProxyV1ServicePhoneNumberCapabilities $capabilities
     */
	#[\JMS\Serializer\Annotation\SerializedName('capabilities')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ProxyV1ServicePhoneNumberCapabilities')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ProxyV1ServicePhoneNumberCapabilities $capabilities = null;
    
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
     * 
     * @var ?\DateTime $dateCreated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_created')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateCreated = null;
    
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
     * 
     * @var ?\DateTime $dateUpdated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_updated')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateUpdated = null;
    
    /**
     * The string that you assigned to describe the resource.
     * 
     * @var ?string $friendlyName
     */
	#[\JMS\Serializer\Annotation\SerializedName('friendly_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $friendlyName = null;
    
    /**
     * The number of open session assigned to the number. See the [How many Phone Numbers do I need?](https://www.twilio.com/docs/proxy/phone-numbers-needed) guide for more information.
     * 
     * @var ?int $inUse
     */
	#[\JMS\Serializer\Annotation\SerializedName('in_use')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $inUse = null;
    
    /**
     * Whether the phone number should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
     * 
     * @var ?bool $isReserved
     */
	#[\JMS\Serializer\Annotation\SerializedName('is_reserved')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isReserved = null;
    
    /**
     * The ISO Country Code for the phone number.
     * 
     * @var ?string $isoCountry
     */
	#[\JMS\Serializer\Annotation\SerializedName('iso_country')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $isoCountry = null;
    
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     * 
     * @var ?string $phoneNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('phone_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phoneNumber = null;
    
    /**
     * The SID of the PhoneNumber resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     * 
     * @var ?string $serviceSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('service_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceSid = null;
    
    /**
     * The unique string that we created to identify the PhoneNumber resource.
     * 
     * @var ?string $sid
     */
	#[\JMS\Serializer\Annotation\SerializedName('sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sid = null;
    
    /**
     * The absolute URL of the PhoneNumber resource.
     * 
     * @var ?string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->accountSid = null;
		$this->capabilities = null;
		$this->dateCreated = null;
		$this->dateUpdated = null;
		$this->friendlyName = null;
		$this->inUse = null;
		$this->isReserved = null;
		$this->isoCountry = null;
		$this->phoneNumber = null;
		$this->serviceSid = null;
		$this->sid = null;
		$this->url = null;
	}
}
