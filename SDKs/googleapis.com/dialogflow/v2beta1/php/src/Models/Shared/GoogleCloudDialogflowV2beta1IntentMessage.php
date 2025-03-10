<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDialogflowV2beta1IntentMessage - Corresponds to the `Response` field in the Dialogflow console.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDialogflowV2beta1IntentMessage
{
    /**
     * The basic card message. Useful for displaying information.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCard $basicCard
     */
	#[\JMS\Serializer\Annotation\SerializedName('basicCard')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCard')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageBasicCard $basicCard = null;
    
    /**
     * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard $browseCarouselCard
     */
	#[\JMS\Serializer\Annotation\SerializedName('browseCarouselCard')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard $browseCarouselCard = null;
    
    /**
     * The card response message.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCard $card
     */
	#[\JMS\Serializer\Annotation\SerializedName('card')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCard')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageCard $card = null;
    
    /**
     * The card for presenting a carousel of options to select from.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect $carouselSelect
     */
	#[\JMS\Serializer\Annotation\SerializedName('carouselSelect')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect $carouselSelect = null;
    
    /**
     * The image response message.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageImage $image
     */
	#[\JMS\Serializer\Annotation\SerializedName('image')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageImage')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageImage $image = null;
    
    /**
     * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion $linkOutSuggestion
     */
	#[\JMS\Serializer\Annotation\SerializedName('linkOutSuggestion')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion $linkOutSuggestion = null;
    
    /**
     * The card for presenting a list of options to select from.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageListSelect $listSelect
     */
	#[\JMS\Serializer\Annotation\SerializedName('listSelect')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageListSelect')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageListSelect $listSelect = null;
    
    /**
     * The media content card for Actions on Google.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContent $mediaContent
     */
	#[\JMS\Serializer\Annotation\SerializedName('mediaContent')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContent')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageMediaContent $mediaContent = null;
    
    /**
     * A custom platform-specific response.
     * 
     * @var ?array<string, mixed> $payload
     */
	#[\JMS\Serializer\Annotation\SerializedName('payload')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $payload = null;
    
    /**
     * Optional. The platform that this message is intended for.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum $platform
     */
	#[\JMS\Serializer\Annotation\SerializedName('platform')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum $platform = null;
    
    /**
     * The quick replies response message.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageQuickReplies $quickReplies
     */
	#[\JMS\Serializer\Annotation\SerializedName('quickReplies')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageQuickReplies')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageQuickReplies $quickReplies = null;
    
    /**
     * Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard $rbmCarouselRichCard
     */
	#[\JMS\Serializer\Annotation\SerializedName('rbmCarouselRichCard')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard $rbmCarouselRichCard = null;
    
    /**
     * Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard $rbmStandaloneRichCard
     */
	#[\JMS\Serializer\Annotation\SerializedName('rbmStandaloneRichCard')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard $rbmStandaloneRichCard = null;
    
    /**
     * Rich Business Messaging (RBM) text response with suggestions.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmText $rbmText
     */
	#[\JMS\Serializer\Annotation\SerializedName('rbmText')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmText')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageRbmText $rbmText = null;
    
    /**
     * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses $simpleResponses
     */
	#[\JMS\Serializer\Annotation\SerializedName('simpleResponses')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses $simpleResponses = null;
    
    /**
     * The collection of suggestions.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSuggestions $suggestions
     */
	#[\JMS\Serializer\Annotation\SerializedName('suggestions')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSuggestions')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageSuggestions $suggestions = null;
    
    /**
     * Table card for Actions on Google.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCard $tableCard
     */
	#[\JMS\Serializer\Annotation\SerializedName('tableCard')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCard')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageTableCard $tableCard = null;
    
    /**
     * Plays audio from a file in Telephony Gateway.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio $telephonyPlayAudio
     */
	#[\JMS\Serializer\Annotation\SerializedName('telephonyPlayAudio')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio $telephonyPlayAudio = null;
    
    /**
     * Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech $telephonySynthesizeSpeech
     */
	#[\JMS\Serializer\Annotation\SerializedName('telephonySynthesizeSpeech')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech $telephonySynthesizeSpeech = null;
    
    /**
     * Transfers the call in Telephony Gateway.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall $telephonyTransferCall
     */
	#[\JMS\Serializer\Annotation\SerializedName('telephonyTransferCall')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall $telephonyTransferCall = null;
    
    /**
     * The text response message.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageText $text
     */
	#[\JMS\Serializer\Annotation\SerializedName('text')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageText')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1IntentMessageText $text = null;
    
	public function __construct()
	{
		$this->basicCard = null;
		$this->browseCarouselCard = null;
		$this->card = null;
		$this->carouselSelect = null;
		$this->image = null;
		$this->linkOutSuggestion = null;
		$this->listSelect = null;
		$this->mediaContent = null;
		$this->payload = null;
		$this->platform = null;
		$this->quickReplies = null;
		$this->rbmCarouselRichCard = null;
		$this->rbmStandaloneRichCard = null;
		$this->rbmText = null;
		$this->simpleResponses = null;
		$this->suggestions = null;
		$this->tableCard = null;
		$this->telephonyPlayAudio = null;
		$this->telephonySynthesizeSpeech = null;
		$this->telephonyTransferCall = null;
		$this->text = null;
	}
}
