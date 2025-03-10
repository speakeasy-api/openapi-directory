<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CreateShortCodeRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/x-www-form-urlencoded')]
    public ?CreateShortCodeCreateShortCodeRequest $requestBody = null;
    
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     * 
     * @var string $serviceSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=ServiceSid')]
    public string $serviceSid;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->serviceSid = "";
	}
}
