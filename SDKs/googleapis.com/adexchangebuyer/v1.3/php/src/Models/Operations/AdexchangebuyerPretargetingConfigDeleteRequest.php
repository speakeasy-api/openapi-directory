<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class AdexchangebuyerPretargetingConfigDeleteRequest
{
    /**
     * The account id to delete the pretargeting config for.
     * 
     * @var string $accountId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=accountId')]
    public string $accountId;
    
    /**
     * Data format for the response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=alt')]
    public ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt = null;
    
    /**
     * The specific id of the configuration to delete.
     * 
     * @var string $configId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=configId')]
    public string $configId;
    
    /**
     * Selector specifying which fields to include in a partial response.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fields')]
    public ?string $fields = null;
    
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
     * Deprecated. Please use quotaUser instead.
     * 
     * @var ?string $userIp
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=userIp')]
    public ?string $userIp = null;
    
	public function __construct()
	{
		$this->accountId = "";
		$this->alt = null;
		$this->configId = "";
		$this->fields = null;
		$this->key = null;
		$this->oauthToken = null;
		$this->prettyPrint = null;
		$this->quotaUser = null;
		$this->userIp = null;
	}
}
