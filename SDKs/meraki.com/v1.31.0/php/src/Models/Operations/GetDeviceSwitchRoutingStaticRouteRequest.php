<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetDeviceSwitchRoutingStaticRouteRequest
{
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=serial')]
    public string $serial;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=staticRouteId')]
    public string $staticRouteId;
    
	public function __construct()
	{
		$this->serial = "";
		$this->staticRouteId = "";
	}
}
