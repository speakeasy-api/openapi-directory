<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder
{
    /**
     * The unique SID identifier of the Account.
     * 
     * @var ?string $accountSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('account_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountSid = null;
    
    /**
     * A 34 character string that uniquely identifies the Address resource that represents the address of the owner of this phone number.
     * 
     * @var ?string $addressSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('address_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $addressSid = null;
    
    /**
     * A value between 0-30 specifying the number of seconds to delay initiating the ownership verification call.
     * 
     * @var ?int $callDelay
     */
	#[\JMS\Serializer\Annotation\SerializedName('call_delay')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $callDelay = null;
    
    /**
     * A mapping of capabilities this hosted phone number will have enabled on Twilio's platform.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities $capabilities
     */
	#[\JMS\Serializer\Annotation\SerializedName('capabilities')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities $capabilities = null;
    
    /**
     * Email recipients who will be informed when an Authorization Document has been sent and signed
     * 
     * @var ?array<string> $ccEmails
     */
	#[\JMS\Serializer\Annotation\SerializedName('cc_emails')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $ccEmails = null;
    
    /**
     * The date this resource was created, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     * 
     * @var ?\DateTime $dateCreated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_created')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateCreated = null;
    
    /**
     * The date that this resource was updated, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     * 
     * @var ?\DateTime $dateUpdated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_updated')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateUpdated = null;
    
    /**
     * Email of the owner of this phone number that is being hosted.
     * 
     * @var ?string $email
     */
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $email = null;
    
    /**
     * A numerical extension to be used when making the ownership verification call.
     * 
     * @var ?string $extension
     */
	#[\JMS\Serializer\Annotation\SerializedName('extension')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $extension = null;
    
    /**
     * A message that explains why a hosted_number_order went to status "action-required"
     * 
     * @var ?string $failureReason
     */
	#[\JMS\Serializer\Annotation\SerializedName('failure_reason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $failureReason = null;
    
    /**
     * A human readable description of this resource, up to 64 characters.
     * 
     * @var ?string $friendlyName
     */
	#[\JMS\Serializer\Annotation\SerializedName('friendly_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $friendlyName = null;
    
    /**
     * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this HostedNumberOrder.
     * 
     * @var ?string $incomingPhoneNumberSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('incoming_phone_number_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $incomingPhoneNumberSid = null;
    
    /**
     * An E164 formatted phone number hosted by this HostedNumberOrder.
     * 
     * @var ?string $phoneNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('phone_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phoneNumber = null;
    
    /**
     * A 34 character string that uniquely identifies this Authorization Document
     * 
     * @var ?string $sid
     */
	#[\JMS\Serializer\Annotation\SerializedName('sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sid = null;
    
    /**
     * A 34 character string that uniquely identifies the LOA document associated with this HostedNumberOrder.
     * 
     * @var ?string $signingDocumentSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('signing_document_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $signingDocumentSid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DependentHostedNumberOrderEnumStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DependentHostedNumberOrderEnumStatusEnum $status = null;
    
    /**
     * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by the developer, to be optionally used in addition to SID.
     * 
     * @var ?string $uniqueName
     */
	#[\JMS\Serializer\Annotation\SerializedName('unique_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uniqueName = null;
    
    /**
     * The number of attempts made to verify ownership of the phone number that is being hosted.
     * 
     * @var ?int $verificationAttempts
     */
	#[\JMS\Serializer\Annotation\SerializedName('verification_attempts')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $verificationAttempts = null;
    
    /**
     * A list of 34 character strings that are unique identifiers for the calls placed as part of ownership verification.
     * 
     * @var ?array<string> $verificationCallSids
     */
	#[\JMS\Serializer\Annotation\SerializedName('verification_call_sids')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $verificationCallSids = null;
    
    /**
     * The digits passed during the ownership verification call.
     * 
     * @var ?string $verificationCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('verification_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $verificationCode = null;
    
    /**
     * A 34 character string that uniquely identifies the Identity Document resource that represents the document for verifying ownership of the number to be hosted.
     * 
     * @var ?string $verificationDocumentSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('verification_document_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $verificationDocumentSid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('verification_type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DependentHostedNumberOrderEnumVerificationTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DependentHostedNumberOrderEnumVerificationTypeEnum $verificationType = null;
    
	public function __construct()
	{
		$this->accountSid = null;
		$this->addressSid = null;
		$this->callDelay = null;
		$this->capabilities = null;
		$this->ccEmails = null;
		$this->dateCreated = null;
		$this->dateUpdated = null;
		$this->email = null;
		$this->extension = null;
		$this->failureReason = null;
		$this->friendlyName = null;
		$this->incomingPhoneNumberSid = null;
		$this->phoneNumber = null;
		$this->sid = null;
		$this->signingDocumentSid = null;
		$this->status = null;
		$this->uniqueName = null;
		$this->verificationAttempts = null;
		$this->verificationCallSids = null;
		$this->verificationCode = null;
		$this->verificationDocumentSid = null;
		$this->verificationType = null;
	}
}
