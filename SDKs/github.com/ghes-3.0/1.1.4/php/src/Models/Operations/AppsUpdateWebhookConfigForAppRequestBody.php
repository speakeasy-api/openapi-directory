<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class AppsUpdateWebhookConfigForAppRequestBody
{
    /**
     * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
     * 
     * @var ?string $contentType
     */
	#[\JMS\Serializer\Annotation\SerializedName('content_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contentType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('insecure_ssl')]
    #[\JMS\Serializer\Annotation\Type('mixed')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public mixed $insecureSsl = null;
    
    /**
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#delivery-headers).
     * 
     * @var ?string $secret
     */
	#[\JMS\Serializer\Annotation\SerializedName('secret')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $secret = null;
    
    /**
     * The URL to which the payloads will be delivered.
     * 
     * @var ?string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->contentType = null;
		$this->insecureSsl = null;
		$this->secret = null;
		$this->url = null;
	}
}
