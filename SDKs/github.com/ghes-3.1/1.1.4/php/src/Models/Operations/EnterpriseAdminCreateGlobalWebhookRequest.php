<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class EnterpriseAdminCreateGlobalWebhookRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public EnterpriseAdminCreateGlobalWebhookRequestBody $requestBody;
    
    /**
     * This API is under preview and subject to change.
     * 
     * @var string $accept
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=accept')]
    public string $accept;
    
	public function __construct()
	{
		$this->requestBody = new \OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminCreateGlobalWebhookRequestBody();
		$this->accept = "";
	}
}
