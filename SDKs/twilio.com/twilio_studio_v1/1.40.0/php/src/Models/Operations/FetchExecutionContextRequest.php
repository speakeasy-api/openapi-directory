<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FetchExecutionContextRequest
{
    /**
     * The SID of the Execution context to fetch.
     * 
     * @var string $executionSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=ExecutionSid')]
    public string $executionSid;
    
    /**
     * The SID of the Flow with the Execution context to fetch.
     * 
     * @var string $flowSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=FlowSid')]
    public string $flowSid;
    
	public function __construct()
	{
		$this->executionSid = "";
		$this->flowSid = "";
	}
}
