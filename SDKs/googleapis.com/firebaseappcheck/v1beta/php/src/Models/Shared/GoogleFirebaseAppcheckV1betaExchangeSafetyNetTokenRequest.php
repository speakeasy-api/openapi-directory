<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest - Request message for the ExchangeSafetyNetToken method.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest
{
    /**
     * Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app.
     * 
     * @var ?string $safetyNetToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('safetyNetToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $safetyNetToken = null;
    
	public function __construct()
	{
		$this->safetyNetToken = null;
	}
}
