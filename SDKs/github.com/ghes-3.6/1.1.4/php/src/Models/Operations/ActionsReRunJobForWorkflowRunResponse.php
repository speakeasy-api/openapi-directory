<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ActionsReRunJobForWorkflowRunResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Forbidden
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError = null;
    
    /**
     * Response
     * 
     * @var ?array<string, mixed> $emptyObject
     */
	
    public ?array $emptyObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->basicError = null;
		$this->emptyObject = null;
	}
}
