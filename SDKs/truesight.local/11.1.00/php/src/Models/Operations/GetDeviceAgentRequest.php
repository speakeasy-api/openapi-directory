<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetDeviceAgentRequest
{
    /**
     * The ID of the device.
     * 
     * @var int $deviceId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=deviceId')]
    public int $deviceId;
    
	public function __construct()
	{
		$this->deviceId = 0;
	}
}
