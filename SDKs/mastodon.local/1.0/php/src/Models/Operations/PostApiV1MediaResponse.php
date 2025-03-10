<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostApiV1MediaResponse
{
    /**
     * Attachment created successfully. Note that the Attachment will be created even if the file is not understood correctly.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Attachment $attachment
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Attachment $attachment = null;
    
	
    public string $contentType;
    
    /**
     * Invalid or missing Authorization header
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Error $error
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Error $error = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->attachment = null;
		$this->contentType = "";
		$this->error = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
