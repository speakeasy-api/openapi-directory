<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class FetchSipCredentialListMappingResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ApiV2010AccountSipSipDomainSipCredentialListMapping $apiV2010AccountSipSipDomainSipCredentialListMapping
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ApiV2010AccountSipSipDomainSipCredentialListMapping $apiV2010AccountSipSipDomainSipCredentialListMapping = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->apiV2010AccountSipSipDomainSipCredentialListMapping = null;
	}
}
