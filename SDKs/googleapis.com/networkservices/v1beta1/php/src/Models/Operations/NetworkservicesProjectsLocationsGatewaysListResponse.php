<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class NetworkservicesProjectsLocationsGatewaysListResponse
{
	
    public string $contentType;
    
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListGatewaysResponse $listGatewaysResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListGatewaysResponse $listGatewaysResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->listGatewaysResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
