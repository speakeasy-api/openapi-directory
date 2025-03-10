<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetApiV1ListsResponse
{
	
    public string $contentType;
    
    /**
     * Invalid or missing Authorization header
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Error $error
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Error $error = null;
    
    /**
     * Use id as a parameter for related API calls.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ListT> $lists
     */
	
    public ?array $lists = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->error = null;
		$this->lists = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
