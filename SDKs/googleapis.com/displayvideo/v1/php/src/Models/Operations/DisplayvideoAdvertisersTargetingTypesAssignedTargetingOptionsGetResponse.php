<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse
{
    /**
     * Successful response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOption $assignedTargetingOption
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOption $assignedTargetingOption = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->assignedTargetingOption = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
