<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetOrganizationApplianceUplinkStatusesResponse
{
	
    public string $contentType;
    
    /**
     * $headers
     * 
     * @var ?array<string, array<string>> $headers
     */
	
    public ?array $headers = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successful operation
     * 
     * @var ?array<array<string, mixed>> $getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects
     */
	
    public ?array $getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->headers = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects = null;
	}
}
