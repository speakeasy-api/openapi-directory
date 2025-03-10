<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class AddOrReplaceDocumentsRequest
{
    /**
     * $requestBody
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\AddOrReplaceDocumentsRequestBody> $requestBody
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?array $requestBody = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=csvDelimiter')]
    public ?string $csvDelimiter = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=primaryKey')]
    public ?string $primaryKey = null;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->csvDelimiter = null;
		$this->primaryKey = null;
	}
}
