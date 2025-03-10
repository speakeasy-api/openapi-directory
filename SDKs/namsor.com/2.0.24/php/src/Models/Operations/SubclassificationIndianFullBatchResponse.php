<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class SubclassificationIndianFullBatchResponse
{
    /**
     * A list of classified names at a subcountry level.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameGeoSubclassificationOut $batchPersonalNameGeoSubclassificationOut
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BatchPersonalNameGeoSubclassificationOut $batchPersonalNameGeoSubclassificationOut = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->batchPersonalNameGeoSubclassificationOut = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
