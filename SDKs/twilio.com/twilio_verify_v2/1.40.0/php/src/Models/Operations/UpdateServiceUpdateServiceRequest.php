<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateServiceUpdateServiceRequest
{
    /**
     * The length of the verification code to generate. Must be an integer value between 4 and 10, inclusive.
     * 
     * @var ?int $codeLength
     */
	#[SpeakeasyMetadata('form:name=CodeLength')]
    public ?int $codeLength = null;
    
    /**
     * Whether to allow sending verifications with a custom code instead of a randomly generated one. Not available for all customers.
     * 
     * @var ?bool $customCodeEnabled
     */
	#[SpeakeasyMetadata('form:name=CustomCodeEnabled')]
    public ?bool $customCodeEnabled = null;
    
    /**
     * The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be used for all SMS verifications unless explicitly overriden. SMS channel only.
     * 
     * @var ?string $defaultTemplateSid
     */
	#[SpeakeasyMetadata('form:name=DefaultTemplateSid')]
    public ?string $defaultTemplateSid = null;
    
    /**
     * Whether to add a privacy warning at the end of an SMS. **Disabled by default and applies only for SMS.**
     * 
     * @var ?bool $doNotShareWarningEnabled
     */
	#[SpeakeasyMetadata('form:name=DoNotShareWarningEnabled')]
    public ?bool $doNotShareWarningEnabled = null;
    
    /**
     * Whether to ask the user to press a number before delivering the verify code in a phone call.
     * 
     * @var ?bool $dtmfInputRequired
     */
	#[SpeakeasyMetadata('form:name=DtmfInputRequired')]
    public ?bool $dtmfInputRequired = null;
    
    /**
     * A descriptive string that you create to describe the verification service. It can be up to 30 characters long. **This value should not contain PII.**
     * 
     * @var ?string $friendlyName
     */
	#[SpeakeasyMetadata('form:name=FriendlyName')]
    public ?string $friendlyName = null;
    
    /**
     * Whether to perform a lookup with each verification started and return info about the phone number.
     * 
     * @var ?bool $lookupEnabled
     */
	#[SpeakeasyMetadata('form:name=LookupEnabled')]
    public ?bool $lookupEnabled = null;
    
    /**
     * Whether to pass PSD2 transaction parameters when starting a verification.
     * 
     * @var ?bool $psd2Enabled
     */
	#[SpeakeasyMetadata('form:name=Psd2Enabled')]
    public ?bool $psd2Enabled = null;
    
    /**
     * Optional configuration for the Push factors. Set the APN Credential for this service. This will allow to send push notifications to iOS devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
     * 
     * @var ?string $pushApnCredentialSid
     */
	#[SpeakeasyMetadata('form:name=Push.ApnCredentialSid')]
    public ?string $pushApnCredentialSid = null;
    
    /**
     * Optional configuration for the Push factors. Set the FCM Credential for this service. This will allow to send push notifications to Android devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
     * 
     * @var ?string $pushFcmCredentialSid
     */
	#[SpeakeasyMetadata('form:name=Push.FcmCredentialSid')]
    public ?string $pushFcmCredentialSid = null;
    
    /**
     * Optional configuration for the Push factors. If true, include the date in the Challenge's response. Otherwise, the date is omitted from the response. See [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter for more info. Default: false. **Deprecated** do not use this parameter.
     * 
     * @var ?bool $pushIncludeDate
     */
	#[SpeakeasyMetadata('form:name=Push.IncludeDate')]
    public ?bool $pushIncludeDate = null;
    
    /**
     * Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`.
     * 
     * @var ?bool $skipSmsToLandlines
     */
	#[SpeakeasyMetadata('form:name=SkipSmsToLandlines')]
    public ?bool $skipSmsToLandlines = null;
    
    /**
     * Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. Defaults to 6
     * 
     * @var ?int $totpCodeLength
     */
	#[SpeakeasyMetadata('form:name=Totp.CodeLength')]
    public ?int $totpCodeLength = null;
    
    /**
     * Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will allow to configure the issuer of the TOTP URI.
     * 
     * @var ?string $totpIssuer
     */
	#[SpeakeasyMetadata('form:name=Totp.Issuer')]
    public ?string $totpIssuer = null;
    
    /**
     * Optional configuration for the TOTP factors. The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1
     * 
     * @var ?int $totpSkew
     */
	#[SpeakeasyMetadata('form:name=Totp.Skew')]
    public ?int $totpSkew = null;
    
    /**
     * Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. Defaults to 30 seconds
     * 
     * @var ?int $totpTimeStep
     */
	#[SpeakeasyMetadata('form:name=Totp.TimeStep')]
    public ?int $totpTimeStep = null;
    
    /**
     * The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages.
     * 
     * @var ?string $ttsName
     */
	#[SpeakeasyMetadata('form:name=TtsName')]
    public ?string $ttsName = null;
    
	public function __construct()
	{
		$this->codeLength = null;
		$this->customCodeEnabled = null;
		$this->defaultTemplateSid = null;
		$this->doNotShareWarningEnabled = null;
		$this->dtmfInputRequired = null;
		$this->friendlyName = null;
		$this->lookupEnabled = null;
		$this->psd2Enabled = null;
		$this->pushApnCredentialSid = null;
		$this->pushFcmCredentialSid = null;
		$this->pushIncludeDate = null;
		$this->skipSmsToLandlines = null;
		$this->totpCodeLength = null;
		$this->totpIssuer = null;
		$this->totpSkew = null;
		$this->totpTimeStep = null;
		$this->ttsName = null;
	}
}
