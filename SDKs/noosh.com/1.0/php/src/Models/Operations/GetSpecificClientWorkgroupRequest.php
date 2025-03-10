<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetSpecificClientWorkgroupRequest
{
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=client_workgroup_id')]
    public string $clientWorkgroupId;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=workgroup_id')]
    public string $workgroupId;
    
	public function __construct()
	{
		$this->clientWorkgroupId = "";
		$this->workgroupId = "";
	}
}
