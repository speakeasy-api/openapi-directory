<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successful operation
     * 
     * @var ?array<string, mixed> $updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject
     */
	
    public ?array $updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject = null;
	}
}
