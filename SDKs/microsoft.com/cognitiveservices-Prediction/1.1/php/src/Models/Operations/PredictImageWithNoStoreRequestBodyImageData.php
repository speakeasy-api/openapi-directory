<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PredictImageWithNoStoreRequestBodyImageData
{
	#[SpeakeasyMetadata('multipartForm:content=true')]
    public string $content;
    
	#[SpeakeasyMetadata('multipartForm:name=imageData')]
    public string $imageData;
    
	public function __construct()
	{
		$this->content = "";
		$this->imageData = "";
	}
}
