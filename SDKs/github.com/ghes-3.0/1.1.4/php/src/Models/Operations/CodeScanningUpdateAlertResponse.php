<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CodeScanningUpdateAlertResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Response if the repository is archived or if github advanced security is not enabled for this repository
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError = null;
    
    /**
     * Response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CodeScanningAlert $codeScanningAlert
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CodeScanningAlert $codeScanningAlert = null;
    
    /**
     * Service unavailable
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CodeScanningUpdateAlert503ApplicationJSON $codeScanningUpdateAlert503ApplicationJSONObject
     */
	
    public ?CodeScanningUpdateAlert503ApplicationJSON $codeScanningUpdateAlert503ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->basicError = null;
		$this->codeScanningAlert = null;
		$this->codeScanningUpdateAlert503ApplicationJSONObject = null;
	}
}
