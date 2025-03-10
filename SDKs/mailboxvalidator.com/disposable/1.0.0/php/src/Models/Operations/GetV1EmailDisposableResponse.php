<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetV1EmailDisposableResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * disposable email checker response
     * 
     * @var ?string $getV1EmailDisposable200ApplicationJSONString
     */
	
    public ?string $getV1EmailDisposable200ApplicationJSONString = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getV1EmailDisposable200ApplicationJSONString = null;
	}
}
