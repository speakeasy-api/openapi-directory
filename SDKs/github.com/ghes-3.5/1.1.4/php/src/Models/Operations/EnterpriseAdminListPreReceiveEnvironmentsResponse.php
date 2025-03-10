<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class EnterpriseAdminListPreReceiveEnvironmentsResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Response
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\PreReceiveEnvironment> $preReceiveEnvironments
     */
	
    public ?array $preReceiveEnvironments = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->preReceiveEnvironments = null;
	}
}
