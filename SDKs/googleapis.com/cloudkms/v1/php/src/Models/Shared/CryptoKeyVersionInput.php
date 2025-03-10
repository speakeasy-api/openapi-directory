<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CryptoKeyVersionInput - A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CryptoKeyVersionInput
{
    /**
     * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\KeyOperationAttestationInput $attestation
     */
	#[\JMS\Serializer\Annotation\SerializedName('attestation')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\KeyOperationAttestationInput')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?KeyOperationAttestationInput $attestation = null;
    
    /**
     * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ExternalProtectionLevelOptions $externalProtectionLevelOptions
     */
	#[\JMS\Serializer\Annotation\SerializedName('externalProtectionLevelOptions')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ExternalProtectionLevelOptions')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ExternalProtectionLevelOptions $externalProtectionLevelOptions = null;
    
    /**
     * The current state of the CryptoKeyVersion.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionStateEnum $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionStateEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CryptoKeyVersionStateEnum $state = null;
    
	public function __construct()
	{
		$this->attestation = null;
		$this->externalProtectionLevelOptions = null;
		$this->state = null;
	}
}
