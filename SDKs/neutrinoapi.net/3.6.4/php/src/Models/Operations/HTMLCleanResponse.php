<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class HTMLCleanResponse
{
    /**
     * Your API request has been rejected. Check error code for details
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\APIError $apiError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\APIError $apiError = null;
    
	
    public string $contentType;
    
	
    public ?string $htmlClean200ApplicationJSONBinaryString = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->apiError = null;
		$this->contentType = "";
		$this->htmlClean200ApplicationJSONBinaryString = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
