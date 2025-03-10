<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GETMostsharedSectionTimePeriodJsonResponse
{
	
    public string $contentType;
    
    /**
     * An array of Articles
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GETMostsharedSectionTimePeriodJSON200ApplicationJSON $getMostsharedSectionTimePeriodJSON200ApplicationJSONObject
     */
	
    public ?GETMostsharedSectionTimePeriodJSON200ApplicationJSON $getMostsharedSectionTimePeriodJSON200ApplicationJSONObject = null;
    
	
    public ?GETMostsharedSectionTimePeriodJSON400ApplicationJSON $getMostsharedSectionTimePeriodJSON400ApplicationJSONObject = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->getMostsharedSectionTimePeriodJSON200ApplicationJSONObject = null;
		$this->getMostsharedSectionTimePeriodJSON400ApplicationJSONObject = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
