<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ComputeNodeTemplatesGetResponse
{
	
    public string $contentType;
    
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\NodeTemplate $nodeTemplate
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\NodeTemplate $nodeTemplate = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->nodeTemplate = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
