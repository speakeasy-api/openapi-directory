<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetCertificateDetailByCertIdentifierResponse
{
	
    public ?string $body = null;
    
    /**
     * Certificate details retrieved
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CertificateDetailV2 $certificateDetailV2
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CertificateDetailV2 $certificateDetailV2 = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->body = null;
		$this->certificateDetailV2 = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
