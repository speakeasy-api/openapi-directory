<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListCompositionResponse
{
	
    public string $contentType;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ListCompositionListCompositionResponse $listCompositionResponse
     */
	
    public ?ListCompositionListCompositionResponse $listCompositionResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->listCompositionResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
