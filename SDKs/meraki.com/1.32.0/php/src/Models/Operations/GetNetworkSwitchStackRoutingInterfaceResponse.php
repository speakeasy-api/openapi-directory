<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetNetworkSwitchStackRoutingInterfaceResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successful operation
     * 
     * @var ?array<string, mixed> $getNetworkSwitchStackRoutingInterface200ApplicationJSONObject
     */
	
    public ?array $getNetworkSwitchStackRoutingInterface200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getNetworkSwitchStackRoutingInterface200ApplicationJSONObject = null;
	}
}
