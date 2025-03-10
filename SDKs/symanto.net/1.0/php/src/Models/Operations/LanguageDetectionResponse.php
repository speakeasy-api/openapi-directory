<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class LanguageDetectionResponse
{
	
    public string $contentType;
    
    /**
     * Successful Response
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\LanguagePredicted> $languageDetectionResponse
     */
	
    public ?array $languageDetectionResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Validation Error
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ValidationErrors $validationErrors
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ValidationErrors $validationErrors = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->languageDetectionResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->validationErrors = null;
	}
}
