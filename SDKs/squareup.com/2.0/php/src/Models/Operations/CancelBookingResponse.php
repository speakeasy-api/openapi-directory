<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CancelBookingResponse
{
    /**
     * Success
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CancelBookingResponse $cancelBookingResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CancelBookingResponse $cancelBookingResponse = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->cancelBookingResponse = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
