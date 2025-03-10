<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateSyncDocumentPermissionRequest
{
    /**
     * Identifier of the Sync Document. Either a SID or a unique name.
     * 
     * @var string $documentSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=DocumentSid')]
    public string $documentSid;
    
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     * 
     * @var string $identity
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=Identity')]
    public string $identity;
    
	#[SpeakeasyMetadata('request:mediaType=application/x-www-form-urlencoded')]
    public ?UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest $requestBody = null;
    
    /**
     * The unique SID identifier of the Sync Service Instance.
     * 
     * @var string $serviceSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=ServiceSid')]
    public string $serviceSid;
    
	public function __construct()
	{
		$this->documentSid = "";
		$this->identity = "";
		$this->requestBody = null;
		$this->serviceSid = "";
	}
}
