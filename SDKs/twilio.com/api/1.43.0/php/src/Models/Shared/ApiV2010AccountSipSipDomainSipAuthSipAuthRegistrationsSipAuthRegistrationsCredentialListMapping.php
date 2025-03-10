<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping - Created
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping
{
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resource.
     * 
     * @var ?string $accountSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('account_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountSid = null;
    
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     * 
     * @var ?string $dateCreated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_created')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dateCreated = null;
    
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     * 
     * @var ?string $dateUpdated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_updated')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dateUpdated = null;
    
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
     * The unique string that that we created to identify the CredentialListMapping resource.
     * 
     * @var ?string $sid
     */
	#[\JMS\Serializer\Annotation\SerializedName('sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sid = null;
    
	public function __construct()
	{
		$this->accountSid = null;
		$this->dateCreated = null;
		$this->dateUpdated = null;
		$this->friendlyName = null;
		$this->sid = null;
	}
}
