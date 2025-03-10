<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse
{
	
    public ?string $body = null;
    
	
    public string $contentType;
    
    /**
     * successful operation
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\IdentificationTokenResponse $identificationTokenResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\IdentificationTokenResponse $identificationTokenResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->body = null;
		$this->contentType = "";
		$this->identificationTokenResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
