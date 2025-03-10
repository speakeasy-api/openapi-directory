<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DrivePermissionsGetRequest
{
    /**
     * Data format for the response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=alt')]
    public ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt = null;
    
    /**
     * Selector specifying which fields to include in a partial response.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fields')]
    public ?string $fields = null;
    
    /**
     * The ID of the file.
     * 
     * @var string $fileId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=fileId')]
    public string $fileId;
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * 
     * @var ?string $key
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=key')]
    public ?string $key = null;
    
    /**
     * OAuth 2.0 token for the current user.
     * 
     * @var ?string $oauthToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=oauth_token')]
    public ?string $oauthToken = null;
    
    /**
     * The ID of the permission.
     * 
     * @var string $permissionId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=permissionId')]
    public string $permissionId;
    
    /**
     * Returns response with indentations and line breaks.
     * 
     * @var ?bool $prettyPrint
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=prettyPrint')]
    public ?bool $prettyPrint = null;
    
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     * 
     * @var ?string $quotaUser
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=quotaUser')]
    public ?string $quotaUser = null;
    
    /**
     * Whether the requesting application supports both My Drives and shared drives.
     * 
     * @var ?bool $supportsAllDrives
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=supportsAllDrives')]
    public ?bool $supportsAllDrives = null;
    
    /**
     * Deprecated use supportsAllDrives instead.
     * 
     * @var ?bool $supportsTeamDrives
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=supportsTeamDrives')]
    public ?bool $supportsTeamDrives = null;
    
    /**
     * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * 
     * @var ?bool $useDomainAdminAccess
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=useDomainAdminAccess')]
    public ?bool $useDomainAdminAccess = null;
    
    /**
     * Deprecated. Please use quotaUser instead.
     * 
     * @var ?string $userIp
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=userIp')]
    public ?string $userIp = null;
    
	public function __construct()
	{
		$this->alt = null;
		$this->fields = null;
		$this->fileId = "";
		$this->key = null;
		$this->oauthToken = null;
		$this->permissionId = "";
		$this->prettyPrint = null;
		$this->quotaUser = null;
		$this->supportsAllDrives = null;
		$this->supportsTeamDrives = null;
		$this->useDomainAdminAccess = null;
		$this->userIp = null;
	}
}
