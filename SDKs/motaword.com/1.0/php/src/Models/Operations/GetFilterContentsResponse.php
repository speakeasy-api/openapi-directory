<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetFilterContentsResponse
{
	
    public string $contentType;
    
    /**
     * UserNotFound
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Error $error
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Error $error = null;
    
    /**
     * Filter contents
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\FilterContents $filterContents
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\FilterContents $filterContents = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->error = null;
		$this->filterContents = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
