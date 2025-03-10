<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class TimeMachineTimeMachineGetSecurity
{
	#[SpeakeasyMetadata('security:scheme=true,type=apiKey,subtype=header,name=X-API-Key')]
    public string $apiKeyHeader;
    
	public function __construct()
	{
		$this->apiKeyHeader = "";
	}
}
