<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ActivitySetThreadSubscriptionRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?ActivitySetThreadSubscriptionRequestBody $requestBody = null;
    
    /**
     * thread_id parameter
     * 
     * @var int $threadId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=thread_id')]
    public int $threadId;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->threadId = 0;
	}
}
