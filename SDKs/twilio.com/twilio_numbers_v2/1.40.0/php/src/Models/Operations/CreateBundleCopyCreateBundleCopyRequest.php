<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CreateBundleCopyCreateBundleCopyRequest
{
    /**
     * The string that you assigned to describe the copied bundle.
     * 
     * @var ?string $friendlyName
     */
	#[SpeakeasyMetadata('form:name=FriendlyName')]
    public ?string $friendlyName = null;
    
	public function __construct()
	{
		$this->friendlyName = null;
	}
}
