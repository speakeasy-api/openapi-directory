<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class StopPointGetCarParksByIdRequest
{
    /**
     * stopPointId is required to get the car parks.
     * 
     * @var string $stopPointId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=stopPointId')]
    public string $stopPointId;
    
	public function __construct()
	{
		$this->stopPointId = "";
	}
}
