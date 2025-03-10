<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetAdministeredIdentitiesMeResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Successful operation
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetAdministeredIdentitiesMe200ApplicationJSON $getAdministeredIdentitiesMe200ApplicationJSONObject
     */
	
    public ?GetAdministeredIdentitiesMe200ApplicationJSON $getAdministeredIdentitiesMe200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getAdministeredIdentitiesMe200ApplicationJSONObject = null;
	}
}
