<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateAssetUpdateAssetRequest
{
    /**
     * A descriptive string that you create to describe the Asset resource. It can be a maximum of 255 characters.
     * 
     * @var string $friendlyName
     */
	#[SpeakeasyMetadata('form:name=FriendlyName')]
    public string $friendlyName;
    
	public function __construct()
	{
		$this->friendlyName = "";
	}
}
