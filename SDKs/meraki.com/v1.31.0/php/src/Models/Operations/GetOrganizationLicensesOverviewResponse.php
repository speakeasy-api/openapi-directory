<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetOrganizationLicensesOverviewResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successful operation
     * 
     * @var ?array<string, mixed> $getOrganizationLicensesOverview200ApplicationJSONObject
     */
	
    public ?array $getOrganizationLicensesOverview200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getOrganizationLicensesOverview200ApplicationJSONObject = null;
	}
}
