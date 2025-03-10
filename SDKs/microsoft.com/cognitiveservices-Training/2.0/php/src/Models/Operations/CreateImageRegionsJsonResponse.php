<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateImageRegionsJsonResponse
{
	
    public ?string $body = null;
    
	
    public string $contentType;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ImageRegionCreateSummary $imageRegionCreateSummary
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ImageRegionCreateSummary $imageRegionCreateSummary = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->body = null;
		$this->contentType = "";
		$this->imageRegionCreateSummary = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
