<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class JapaneseNameMatchResponse
{
	
    public string $contentType;
    
    /**
     * A romanized name.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\NameMatchedOut $nameMatchedOut
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\NameMatchedOut $nameMatchedOut = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->nameMatchedOut = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
