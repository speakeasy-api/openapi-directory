<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class Security
{
	#[SpeakeasyMetadata('security:scheme=true,type=apiKey,subtype=header,name=Ocp-Apim-Subscription-Key')]
    public ?string $apiKeyHeader = null;
    
	#[SpeakeasyMetadata('security:scheme=true,type=apiKey,subtype=query,name=key')]
    public ?string $apiKeyQuery = null;
    
	public function __construct()
	{
		$this->apiKeyHeader = null;
		$this->apiKeyQuery = null;
	}
}
