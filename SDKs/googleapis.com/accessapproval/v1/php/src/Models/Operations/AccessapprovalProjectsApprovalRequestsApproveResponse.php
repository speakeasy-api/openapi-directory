<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class AccessapprovalProjectsApprovalRequestsApproveResponse
{
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ApprovalRequest $approvalRequest
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ApprovalRequest $approvalRequest = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->approvalRequest = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
