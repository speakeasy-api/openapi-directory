<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Pubsub - Represents a Pub/Sub transport.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Pubsub
{
    /**
     * Output only. The name of the Pub/Sub subscription created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}`.
     * 
     * @var ?string $subscription
     */
	#[\JMS\Serializer\Annotation\SerializedName('subscription')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $subscription = null;
    
    /**
     * Optional. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}`. You may set an existing topic for triggers of the type `google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.
     * 
     * @var ?string $topic
     */
	#[\JMS\Serializer\Annotation\SerializedName('topic')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $topic = null;
    
	public function __construct()
	{
		$this->subscription = null;
		$this->topic = null;
	}
}
