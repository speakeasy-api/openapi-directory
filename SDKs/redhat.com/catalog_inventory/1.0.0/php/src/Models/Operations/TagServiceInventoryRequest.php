<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class TagServiceInventoryRequest
{
    /**
     * Tag attributes to add
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\Tag> $requestBody
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public array $requestBody;
    
    /**
     * ID of the resource
     * 
     * @var string $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public string $id;
    
	public function __construct()
	{
		$this->requestBody = [];
		$this->id = "";
	}
}
