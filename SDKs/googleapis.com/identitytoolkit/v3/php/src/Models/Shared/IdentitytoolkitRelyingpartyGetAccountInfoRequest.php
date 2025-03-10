<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * IdentitytoolkitRelyingpartyGetAccountInfoRequest - Request to get the account information.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class IdentitytoolkitRelyingpartyGetAccountInfoRequest
{
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     * 
     * @var ?string $delegatedProjectNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('delegatedProjectNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $delegatedProjectNumber = null;
    
    /**
     * The list of emails of the users to inquiry.
     * 
     * @var ?array<string> $email
     */
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $email = null;
    
    /**
     * The GITKit token of the authenticated user.
     * 
     * @var ?string $idToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('idToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $idToken = null;
    
    /**
     * The list of local ID's of the users to inquiry.
     * 
     * @var ?array<string> $localId
     */
	#[\JMS\Serializer\Annotation\SerializedName('localId')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $localId = null;
    
    /**
     * Privileged caller can query users by specified phone number.
     * 
     * @var ?array<string> $phoneNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('phoneNumber')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $phoneNumber = null;
    
	public function __construct()
	{
		$this->delegatedProjectNumber = null;
		$this->email = null;
		$this->idToken = null;
		$this->localId = null;
		$this->phoneNumber = null;
	}
}
