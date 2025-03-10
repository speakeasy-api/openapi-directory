<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetResourceResponse
{
	
    public string $contentType;
    
    /**
     * Retrieve the resource having this name
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Resource $resource
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Resource $resource = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->resource = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
