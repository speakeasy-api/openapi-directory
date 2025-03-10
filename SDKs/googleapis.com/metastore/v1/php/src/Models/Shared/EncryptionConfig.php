<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * EncryptionConfig - Encryption settings for the service.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class EncryptionConfig
{
    /**
     * The fully qualified customer provided Cloud KMS key name to use for customer data encryption, in the following form:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}.
     * 
     * @var ?string $kmsKey
     */
	#[\JMS\Serializer\Annotation\SerializedName('kmsKey')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kmsKey = null;
    
	public function __construct()
	{
		$this->kmsKey = null;
	}
}
