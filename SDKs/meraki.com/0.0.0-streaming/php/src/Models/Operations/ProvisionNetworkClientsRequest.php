<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ProvisionNetworkClientsRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ProvisionNetworkClientsRequestBody $requestBody;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=networkId')]
    public string $networkId;
    
	public function __construct()
	{
		$this->requestBody = new \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBody();
		$this->networkId = "";
	}
}
