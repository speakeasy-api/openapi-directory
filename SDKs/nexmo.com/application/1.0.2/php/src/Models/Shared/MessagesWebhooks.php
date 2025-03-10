<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class MessagesWebhooks
{
    /**
     * `inbound_url`: The URL where inbound messages are delivered. `status_url`: The URL where message status is delivered.
     * 
     * @var string $endpoint
     */
	#[\JMS\Serializer\Annotation\SerializedName('endpoint')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $endpoint;
    
	#[\JMS\Serializer\Annotation\SerializedName('endpoint_type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MessagesWebhooksEndpointTypeEnum>')]
    public MessagesWebhooksEndpointTypeEnum $endpointType;
    
    /**
     * The HTTP method used to send data to the `inbound_url` or `status_url`. Default is POST.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\MessagesWebhooksHttpMethodEnum $httpMethod
     */
	#[\JMS\Serializer\Annotation\SerializedName('http_method')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MessagesWebhooksHttpMethodEnum>')]
    public MessagesWebhooksHttpMethodEnum $httpMethod;
    
	public function __construct()
	{
		$this->endpoint = "";
		$this->endpointType = \OpenAPI\OpenAPI\Models\Shared\MessagesWebhooksEndpointTypeEnum::INBOUND_URL;
		$this->httpMethod = \OpenAPI\OpenAPI\Models\Shared\MessagesWebhooksHttpMethodEnum::GET;
	}
}
