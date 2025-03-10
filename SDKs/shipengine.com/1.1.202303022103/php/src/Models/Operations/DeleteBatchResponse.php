<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DeleteBatchResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * The request was successful.
     * 
     * @var ?string $emptyResponseBody
     */
	
    public ?string $emptyResponseBody = null;
    
    /**
     * The request contained errors.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody $errorResponseBody
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody $errorResponseBody = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->emptyResponseBody = null;
		$this->errorResponseBody = null;
	}
}
