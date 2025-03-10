<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * VoiceV1SourceIpMapping - Created
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class VoiceV1SourceIpMapping
{
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     * 
     * @var ?\DateTime $dateCreated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_created')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateCreated = null;
    
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     * 
     * @var ?\DateTime $dateUpdated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_updated')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateUpdated = null;
    
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to map from.
     * 
     * @var ?string $ipRecordSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('ip_record_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ipRecordSid = null;
    
    /**
     * The unique string that we created to identify the IP Record resource.
     * 
     * @var ?string $sid
     */
	#[\JMS\Serializer\Annotation\SerializedName('sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sid = null;
    
    /**
     * The SID of the SIP Domain that the IP Record is mapped to.
     * 
     * @var ?string $sipDomainSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('sip_domain_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sipDomainSid = null;
    
    /**
     * The absolute URL of the resource.
     * 
     * @var ?string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->dateCreated = null;
		$this->dateUpdated = null;
		$this->ipRecordSid = null;
		$this->sid = null;
		$this->sipDomainSid = null;
		$this->url = null;
	}
}
