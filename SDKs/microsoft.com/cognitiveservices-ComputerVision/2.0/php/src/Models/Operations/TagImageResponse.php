<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TagImageResponse
{
    /**
     * Error response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ComputerVisionError $computerVisionError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ComputerVisionError $computerVisionError = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Image tags object.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\TagResult $tagResult
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\TagResult $tagResult = null;
    
	public function __construct()
	{
		$this->computerVisionError = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->tagResult = null;
	}
}
