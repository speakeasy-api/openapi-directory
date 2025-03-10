<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ModeArrivalsRequest
{
    /**
     * A number of arrivals to return for each stop, -1 to return all available.
     * 
     * @var ?int $count
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=count')]
    public ?int $count = null;
    
    /**
     * A mode name e.g. tube, dlr
     * 
     * @var string $mode
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=mode')]
    public string $mode;
    
	public function __construct()
	{
		$this->count = null;
		$this->mode = "";
	}
}
