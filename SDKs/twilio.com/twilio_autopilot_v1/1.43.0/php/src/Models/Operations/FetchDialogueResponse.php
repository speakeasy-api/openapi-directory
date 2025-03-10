<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class FetchDialogueResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AutopilotV1AssistantDialogue $autopilotV1AssistantDialogue
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\AutopilotV1AssistantDialogue $autopilotV1AssistantDialogue = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->autopilotV1AssistantDialogue = null;
	}
}
