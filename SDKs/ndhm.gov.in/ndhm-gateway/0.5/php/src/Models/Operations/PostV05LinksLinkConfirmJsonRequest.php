<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PostV05LinksLinkConfirmJsonRequest
{
    /**
     * Access token which was issued after successful login with gateway auth server.
     * 
     * @var string $authorization
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Authorization')]
    public string $authorization;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\LinkConfirmationRequest $linkConfirmationRequest;
    
    /**
     * Identifier of the health information provider to which the request was intended.
     * 
     * @var string $xHipId
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-HIP-ID')]
    public string $xHipId;
    
	public function __construct()
	{
		$this->authorization = "";
		$this->linkConfirmationRequest = new \OpenAPI\OpenAPI\Models\Shared\LinkConfirmationRequest();
		$this->xHipId = "";
	}
}
