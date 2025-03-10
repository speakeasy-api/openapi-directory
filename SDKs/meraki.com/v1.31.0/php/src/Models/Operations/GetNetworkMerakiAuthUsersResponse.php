<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetNetworkMerakiAuthUsersResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successful operation
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUsers200ApplicationJSON> $getNetworkMerakiAuthUsers200ApplicationJSONObjects
     */
	
    public ?array $getNetworkMerakiAuthUsers200ApplicationJSONObjects = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getNetworkMerakiAuthUsers200ApplicationJSONObjects = null;
	}
}
