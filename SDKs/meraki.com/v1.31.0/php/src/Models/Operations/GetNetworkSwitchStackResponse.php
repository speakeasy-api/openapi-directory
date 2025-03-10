<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetNetworkSwitchStackResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successful operation
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchStack200ApplicationJSON $getNetworkSwitchStack200ApplicationJSONObject
     */
	
    public ?GetNetworkSwitchStack200ApplicationJSON $getNetworkSwitchStack200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getNetworkSwitchStack200ApplicationJSONObject = null;
	}
}
