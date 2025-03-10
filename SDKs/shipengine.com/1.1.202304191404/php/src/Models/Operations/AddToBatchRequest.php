<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class AddToBatchRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\AddToBatchRequestBody $addToBatchRequestBody;
    
    /**
     * Batch ID
     * 
     * @var string $batchId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=batch_id')]
    public string $batchId;
    
	public function __construct()
	{
		$this->addToBatchRequestBody = new \OpenAPI\OpenAPI\Models\Shared\AddToBatchRequestBody();
		$this->batchId = "";
	}
}
