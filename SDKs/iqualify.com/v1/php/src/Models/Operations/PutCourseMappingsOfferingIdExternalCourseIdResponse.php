<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PutCourseMappingsOfferingIdExternalCourseIdResponse
{
	
    public string $contentType;
    
    /**
     * No authorization token was found.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Error $error
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Error $error = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Course Mapping
     * 
     * @var ?array<string> $putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings
     */
	
    public ?array $putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->error = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings = null;
	}
}
