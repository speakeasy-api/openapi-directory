<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class BloggerCommentsGetResponse
{
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Comment $comment
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Comment $comment = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->comment = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
