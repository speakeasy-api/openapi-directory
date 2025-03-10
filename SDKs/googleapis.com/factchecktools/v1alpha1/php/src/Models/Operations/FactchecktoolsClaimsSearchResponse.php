<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class FactchecktoolsClaimsSearchResponse
{
	
    public string $contentType;
    
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse $googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse $googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
