<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PredictJsonResponse
{
	
    public string $contentType;
    
    /**
     * A successful response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SeldonMessage $seldonMessage
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\SeldonMessage $seldonMessage = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->seldonMessage = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
