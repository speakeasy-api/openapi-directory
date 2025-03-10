<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PostV05ConsentsHiuNotifyRequest
{
    /**
     * Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.
     * 
     * @var string $authorization
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Authorization')]
    public string $authorization;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\HIUConsentNotificationEvent $hiuConsentNotificationEvent;
    
    /**
     * Identifier of the health information user to which the request was intended.
     * 
     * @var string $xHiuId
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-HIU-ID')]
    public string $xHiuId;
    
	public function __construct()
	{
		$this->authorization = "";
		$this->hiuConsentNotificationEvent = new \OpenAPI\OpenAPI\Models\Shared\HIUConsentNotificationEvent();
		$this->xHiuId = "";
	}
}
