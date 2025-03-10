<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class SetpersonshomeSecurity
{
	#[SpeakeasyMetadata('security:scheme=true,type=oauth2,name=Authorization')]
    public ?string $codeOauth = null;
    
	#[SpeakeasyMetadata('security:scheme=true,type=oauth2,name=Authorization')]
    public ?string $passwordOauth = null;
    
	public function __construct()
	{
		$this->codeOauth = null;
		$this->passwordOauth = null;
	}
}
