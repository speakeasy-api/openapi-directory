<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetPatientEnteredObservationHeadingsResponse
{
	
    public string $contentType;
    
    /**
     * OK
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ObservationHeading> $observationHeadings
     */
	
    public ?array $observationHeadings = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->observationHeadings = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
