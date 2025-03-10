<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetOrganizationCameraOnboardingStatusesResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successful operation
     * 
     * @var ?array<array<string, mixed>> $getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects
     */
	
    public ?array $getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects = null;
	}
}
