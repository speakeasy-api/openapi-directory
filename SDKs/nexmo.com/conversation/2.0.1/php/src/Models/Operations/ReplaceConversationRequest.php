<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ReplaceConversationRequest
{
    /**
     * Conversation Request Payload Object
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReplaceConversationRequestBody $requestBody
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?ReplaceConversationRequestBody $requestBody = null;
    
    /**
     * Conversation ID
     * 
     * @var string $conversationId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=conversation_id')]
    public string $conversationId;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->conversationId = "";
	}
}
