<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FetchUnderstandTaskStatisticsRequest
{
    /**
     * The unique ID of the parent Assistant.
     * 
     * @var string $assistantSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=AssistantSid')]
    public string $assistantSid;
    
    /**
     * The unique ID of the Task associated with this Field.
     * 
     * @var string $taskSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=TaskSid')]
    public string $taskSid;
    
	public function __construct()
	{
		$this->assistantSid = "";
		$this->taskSid = "";
	}
}
