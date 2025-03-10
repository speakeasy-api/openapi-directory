<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UsZipRaceEthnicityBatchResponse
{
    /**
     * A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameUSRaceEthnicityOut $batchFirstLastNameUSRaceEthnicityOut
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BatchFirstLastNameUSRaceEthnicityOut $batchFirstLastNameUSRaceEthnicityOut = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->batchFirstLastNameUSRaceEthnicityOut = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
