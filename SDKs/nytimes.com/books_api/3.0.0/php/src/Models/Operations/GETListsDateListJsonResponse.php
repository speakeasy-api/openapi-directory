<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GETListsDateListJsonResponse
{
	
    public string $contentType;
    
	
    public ?GETListsDateListJSON200ApplicationJSON $getListsDateListJSON200ApplicationJSONObject = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->getListsDateListJSON200ApplicationJSONObject = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
