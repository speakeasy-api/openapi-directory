<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * MeetingsCapabilityWebhooksSessionChanged - Vonage will send call session changed events to this URL
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class MeetingsCapabilityWebhooksSessionChanged
{
	#[\JMS\Serializer\Annotation\SerializedName('address')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $address = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('http_method')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum $httpMethod = null;
    
	public function __construct()
	{
		$this->address = null;
		$this->httpMethod = null;
	}
}
