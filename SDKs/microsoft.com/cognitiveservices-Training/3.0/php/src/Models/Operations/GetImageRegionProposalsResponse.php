<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetImageRegionProposalsResponse
{
	
    public string $contentType;
    
    /**
     * Error response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CustomVisionError $customVisionError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\CustomVisionError $customVisionError = null;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ImageRegionProposal $imageRegionProposal
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ImageRegionProposal $imageRegionProposal = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->customVisionError = null;
		$this->imageRegionProposal = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
