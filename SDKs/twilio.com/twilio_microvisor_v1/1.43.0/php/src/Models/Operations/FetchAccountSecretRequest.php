<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FetchAccountSecretRequest
{
    /**
     * The secret key; up to 100 characters.
     * 
     * @var string $key
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=Key')]
    public string $key;
    
	public function __construct()
	{
		$this->key = "";
	}
}
