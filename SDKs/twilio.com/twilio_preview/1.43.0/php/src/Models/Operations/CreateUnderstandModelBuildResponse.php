<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateUnderstandModelBuildResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Created
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PreviewUnderstandAssistantModelBuild $previewUnderstandAssistantModelBuild
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\PreviewUnderstandAssistantModelBuild $previewUnderstandAssistantModelBuild = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->previewUnderstandAssistantModelBuild = null;
	}
}
