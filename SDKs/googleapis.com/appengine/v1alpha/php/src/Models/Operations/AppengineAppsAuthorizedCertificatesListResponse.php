<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class AppengineAppsAuthorizedCertificatesListResponse
{
	
    public string $contentType;
    
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ListAuthorizedCertificatesResponse $listAuthorizedCertificatesResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ListAuthorizedCertificatesResponse $listAuthorizedCertificatesResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->listAuthorizedCertificatesResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
