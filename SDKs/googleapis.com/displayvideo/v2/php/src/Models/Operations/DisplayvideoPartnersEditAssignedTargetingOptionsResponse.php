<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DisplayvideoPartnersEditAssignedTargetingOptionsResponse
{
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BulkEditPartnerAssignedTargetingOptionsResponse $bulkEditPartnerAssignedTargetingOptionsResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BulkEditPartnerAssignedTargetingOptionsResponse $bulkEditPartnerAssignedTargetingOptionsResponse = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->bulkEditPartnerAssignedTargetingOptionsResponse = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
