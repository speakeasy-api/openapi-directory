<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DeleteWorkflowRequest
{
    /**
     * The SID of the Workflow resource to delete.
     * 
     * @var string $sid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=Sid')]
    public string $sid;
    
    /**
     * The SID of the Workspace with the Workflow to delete.
     * 
     * @var string $workspaceSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=WorkspaceSid')]
    public string $workspaceSid;
    
	public function __construct()
	{
		$this->sid = "";
		$this->workspaceSid = "";
	}
}
