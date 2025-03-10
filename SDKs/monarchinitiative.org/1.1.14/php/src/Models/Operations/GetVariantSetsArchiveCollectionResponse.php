<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetVariantSetsArchiveCollectionResponse
{
	
    public string $contentType;
    
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PageOfVariantSets $pageOfVariantSets
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\PageOfVariantSets $pageOfVariantSets = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->pageOfVariantSets = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
