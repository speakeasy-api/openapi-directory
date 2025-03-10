<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class EnterpriseAdminDeletePersonalAccessTokenRequest
{
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=token_id')]
    public int $tokenId;
    
	public function __construct()
	{
		$this->tokenId = 0;
	}
}
