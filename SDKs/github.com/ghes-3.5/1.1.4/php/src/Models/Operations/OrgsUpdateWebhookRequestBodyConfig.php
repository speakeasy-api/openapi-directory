<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * OrgsUpdateWebhookRequestBodyConfig - Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.5/rest/reference/orgs#update-hook-config-params).
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class OrgsUpdateWebhookRequestBodyConfig
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
     * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-server@3.5/webhooks/event-payloads/#delivery-headers).
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
     * @var string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
	public function __construct()
	{
		$this->contentType = null;
		$this->insecureSsl = null;
		$this->secret = null;
		$this->url = "";
	}
}
