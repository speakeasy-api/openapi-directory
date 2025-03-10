<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PhoneCodeGeoResponse
{
	
    public string $contentType;
    
    /**
     * A name with country and phone code.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\FirstLastNamePhoneCodedOut $firstLastNamePhoneCodedOut
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\FirstLastNamePhoneCodedOut $firstLastNamePhoneCodedOut = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->firstLastNamePhoneCodedOut = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
