<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
/**
 * PlayStopParameters - POST parameters
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PlayStopParameters
{
    /**
     * Unique identifier of the call
     * 
     * @var string $callUUID
     */
	#[SpeakeasyMetadata('form:name=CallUUID')]
    public string $callUUID;
    
	public function __construct()
	{
		$this->callUUID = "";
	}
}
