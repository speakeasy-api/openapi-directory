<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse - Response message for the BatchGetRecaptchaV3Configs method.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse
{
    /**
     * RecaptchaV3Configs retrieved.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaRecaptchaV3Config> $configs
     */
	#[\JMS\Serializer\Annotation\SerializedName('configs')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaRecaptchaV3Config>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $configs = null;
    
	public function __construct()
	{
		$this->configs = null;
	}
}
