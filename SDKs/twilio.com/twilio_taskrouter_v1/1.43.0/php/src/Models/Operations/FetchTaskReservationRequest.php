<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FetchTaskReservationRequest
{
    /**
     * The SID of the TaskReservation resource to fetch.
     * 
     * @var string $sid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=Sid')]
    public string $sid;
    
    /**
     * The SID of the reserved Task resource with the TaskReservation resource to fetch.
     * 
     * @var string $taskSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=TaskSid')]
    public string $taskSid;
    
    /**
     * The SID of the Workspace with the TaskReservation resource to fetch.
     * 
     * @var string $workspaceSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=WorkspaceSid')]
    public string $workspaceSid;
    
	public function __construct()
	{
		$this->sid = "";
		$this->taskSid = "";
		$this->workspaceSid = "";
	}
}
