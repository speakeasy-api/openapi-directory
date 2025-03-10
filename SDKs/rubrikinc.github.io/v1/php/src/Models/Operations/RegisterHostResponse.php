<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class RegisterHostResponse
{
	
    public string $contentType;
    
    /**
     * Summary information from registration of the host.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\HostDetail $hostDetail
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\HostDetail $hostDetail = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->hostDetail = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
