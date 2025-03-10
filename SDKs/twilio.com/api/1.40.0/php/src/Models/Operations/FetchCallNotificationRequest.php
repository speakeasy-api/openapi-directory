<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FetchCallNotificationRequest
{
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call Notification resource to fetch.
     * 
     * @var string $accountSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=AccountSid')]
    public string $accountSid;
    
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the Call Notification resource to fetch.
     * 
     * @var string $callSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=CallSid')]
    public string $callSid;
    
    /**
     * The Twilio-provided string that uniquely identifies the Call Notification resource to fetch.
     * 
     * @var string $sid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=Sid')]
    public string $sid;
    
	public function __construct()
	{
		$this->accountSid = "";
		$this->callSid = "";
		$this->sid = "";
	}
}
