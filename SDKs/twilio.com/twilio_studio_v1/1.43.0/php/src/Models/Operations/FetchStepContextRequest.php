<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FetchStepContextRequest
{
    /**
     * The SID of the Engagement with the Step to fetch.
     * 
     * @var string $engagementSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=EngagementSid')]
    public string $engagementSid;
    
    /**
     * The SID of the Flow with the Step to fetch.
     * 
     * @var string $flowSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=FlowSid')]
    public string $flowSid;
    
    /**
     * The SID of the Step to fetch
     * 
     * @var string $stepSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=StepSid')]
    public string $stepSid;
    
	public function __construct()
	{
		$this->engagementSid = "";
		$this->flowSid = "";
		$this->stepSid = "";
	}
}
