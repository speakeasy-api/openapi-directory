<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta $meta = null;
    
    /**
     * $webhooks
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook> $webhooks
     */
	#[\JMS\Serializer\Annotation\SerializedName('webhooks')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $webhooks = null;
    
	public function __construct()
	{
		$this->meta = null;
		$this->webhooks = null;
	}
}
