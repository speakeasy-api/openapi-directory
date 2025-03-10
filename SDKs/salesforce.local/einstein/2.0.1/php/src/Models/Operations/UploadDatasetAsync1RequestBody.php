<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UploadDatasetAsync1RequestBody
{
    /**
     * Path to the .zip file on the local drive (FilePart).
     * 
     * @var ?string $data
     */
	#[SpeakeasyMetadata('multipartForm:name=data')]
    public ?string $data = null;
    
    /**
     * Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the .zip file name.
     * 
     * @var ?string $name
     */
	#[SpeakeasyMetadata('multipartForm:name=name')]
    public ?string $name = null;
    
    /**
     * URL of the .zip file.
     * 
     * @var ?string $path
     */
	#[SpeakeasyMetadata('multipartForm:name=path')]
    public ?string $path = null;
    
    /**
     * Type of dataset data.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UploadDatasetAsync1RequestBodyTypeEnum $type
     */
	#[SpeakeasyMetadata('multipartForm:name=type')]
    public ?UploadDatasetAsync1RequestBodyTypeEnum $type = null;
    
	public function __construct()
	{
		$this->data = null;
		$this->name = null;
		$this->path = null;
		$this->type = null;
	}
}
