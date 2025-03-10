<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateIterationJsonResponse
{
	
    public ?string $body = null;
    
	
    public string $contentType;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Iteration $iteration
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Iteration $iteration = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->body = null;
		$this->contentType = "";
		$this->iteration = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
