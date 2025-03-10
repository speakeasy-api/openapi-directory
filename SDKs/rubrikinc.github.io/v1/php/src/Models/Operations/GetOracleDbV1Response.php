<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetOracleDbV1Response
{
	
    public string $contentType;
    
    /**
     * Detailed information for the specified Oracle database.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\OracleDbDetail $oracleDbDetail
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\OracleDbDetail $oracleDbDetail = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->oracleDbDetail = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
