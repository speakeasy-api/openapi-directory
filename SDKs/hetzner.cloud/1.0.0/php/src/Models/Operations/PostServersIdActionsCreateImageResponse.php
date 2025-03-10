<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostServersIdActionsCreateImageResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * The `image` key in the reply contains an the created Image, which is an object with this structure
     * 
     * 
     * The `action` key in the reply contains an Action object with this structure
     * 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\PostServersIdActionsCreateImage201ApplicationJSON $postServersIdActionsCreateImage201ApplicationJSONObject
     */
	
    public ?PostServersIdActionsCreateImage201ApplicationJSON $postServersIdActionsCreateImage201ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->postServersIdActionsCreateImage201ApplicationJSONObject = null;
	}
}
