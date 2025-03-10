<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDialogflowV2beta1CompileSuggestionResponse - The response message for Participants.CompileSuggestion.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDialogflowV2beta1CompileSuggestionResponse
{
    /**
     * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the CompileSuggestionRequest.context_size field in the request if there aren't that many messages in the conversation.
     * 
     * @var ?int $contextSize
     */
	#[\JMS\Serializer\Annotation\SerializedName('contextSize')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $contextSize = null;
    
    /**
     * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
     * 
     * @var ?string $latestMessage
     */
	#[\JMS\Serializer\Annotation\SerializedName('latestMessage')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $latestMessage = null;
    
    /**
     * Represents a suggestion for a human agent.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Suggestion $suggestion
     */
	#[\JMS\Serializer\Annotation\SerializedName('suggestion')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Suggestion')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2beta1Suggestion $suggestion = null;
    
	public function __construct()
	{
		$this->contextSize = null;
		$this->latestMessage = null;
		$this->suggestion = null;
	}
}
