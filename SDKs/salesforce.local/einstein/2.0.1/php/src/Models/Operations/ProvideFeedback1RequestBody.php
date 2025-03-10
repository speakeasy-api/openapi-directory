<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ProvideFeedback1RequestBody
{
    /**
     * Local image file to upload.
     * 
     * @var ?string $data
     */
	#[SpeakeasyMetadata('multipartForm:name=data')]
    public ?string $data = null;
    
    /**
     * Correct label for the example. Must be a label that exists in the dataset.
     * 
     * @var ?string $expectedLabel
     */
	#[SpeakeasyMetadata('multipartForm:name=expectedLabel')]
    public ?string $expectedLabel = null;
    
    /**
     * ID of the model that misclassified the image. The feedback example is added to the dataset associated with this model.
     * 
     * @var ?string $modelId
     */
	#[SpeakeasyMetadata('multipartForm:name=modelId')]
    public ?string $modelId = null;
    
    /**
     * Name of the example. Optional. Maximum length is 180 characters.
     * 
     * @var ?string $name
     */
	#[SpeakeasyMetadata('multipartForm:name=name')]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->data = null;
		$this->expectedLabel = null;
		$this->modelId = null;
		$this->name = null;
	}
}
