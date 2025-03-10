<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PredictMultipartResponse
{
	
    public string $contentType;
    
    /**
     * Prediction Result
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ImageClassificationResponse $imageClassificationResponse
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ImageClassificationResponse $imageClassificationResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->imageClassificationResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
