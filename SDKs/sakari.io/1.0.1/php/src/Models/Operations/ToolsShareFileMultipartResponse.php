<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ToolsShareFileMultipartResponse
{
	
    public string $contentType;
    
    /**
     * invalid request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponse $errorResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponse $errorResponse = null;
    
    /**
     * successful operation
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ShareFileResponse $shareFileResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ShareFileResponse $shareFileResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->errorResponse = null;
		$this->shareFileResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
