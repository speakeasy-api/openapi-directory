<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetProductsIdOptionsJsonResponse
{
	
    public string $contentType;
    
    /**
     * Product Not Found.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\NotFound $notFound
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\NotFound $notFound = null;
    
    /**
     * OK
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ProductOption> $productOptions
     */
	
    public ?array $productOptions = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->notFound = null;
		$this->productOptions = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
