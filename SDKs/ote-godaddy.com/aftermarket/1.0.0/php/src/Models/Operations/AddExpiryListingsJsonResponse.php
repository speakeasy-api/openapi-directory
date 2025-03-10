<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class AddExpiryListingsJsonResponse
{
    /**
     * Request was successful
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AftermarketListingAction $aftermarketListingAction
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\AftermarketListingAction $aftermarketListingAction = null;
    
	
    public ?string $body = null;
    
	
    public string $contentType;
    
    /**
     * Request was malformed
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Error $error
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Error $error = null;
    
    /**
     * Too many requests received within interval
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorLimit $errorLimit
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorLimit $errorLimit = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->aftermarketListingAction = null;
		$this->body = null;
		$this->contentType = "";
		$this->error = null;
		$this->errorLimit = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
