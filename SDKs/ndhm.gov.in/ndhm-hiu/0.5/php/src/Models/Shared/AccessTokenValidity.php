<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class AccessTokenValidity
{
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     * 
     * @var \DateTime $expiry
     */
	#[\JMS\Serializer\Annotation\SerializedName('expiry')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $expiry;
    
    /**
     * number of times, the token can be used
     * 
     * @var int $limit
     */
	#[\JMS\Serializer\Annotation\SerializedName('limit')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $limit;
    
    /**
     * what is the purpose of user auth
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum $purpose
     */
	#[\JMS\Serializer\Annotation\SerializedName('purpose')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum>')]
    public PatientAuthPurposeEnum $purpose;
    
    /**
     * identification of requester
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequester $requester
     */
	#[\JMS\Serializer\Annotation\SerializedName('requester')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PatientAuthRequester')]
    public PatientAuthRequester $requester;
    
	public function __construct()
	{
		$this->expiry = new \DateTime();
		$this->limit = 0;
		$this->purpose = \OpenAPI\OpenAPI\Models\Shared\PatientAuthPurposeEnum::LINK;
		$this->requester = new \OpenAPI\OpenAPI\Models\Shared\PatientAuthRequester();
	}
}
