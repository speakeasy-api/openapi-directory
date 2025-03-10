<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class BankTransferSweepGetResponse
{
    /**
     * OK
     * 
     * @var ?array<string, mixed> $bankTransferSweepGetResponse
     */
	
    public ?array $bankTransferSweepGetResponse = null;
    
	
    public string $contentType;
    
    /**
     * Error response
     * 
     * @var ?array<string, mixed> $plaidError
     */
	
    public ?array $plaidError = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->bankTransferSweepGetResponse = null;
		$this->contentType = "";
		$this->plaidError = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
