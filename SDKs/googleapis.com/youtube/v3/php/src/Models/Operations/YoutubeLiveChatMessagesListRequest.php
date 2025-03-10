<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class YoutubeLiveChatMessagesListRequest
{
    /**
     * V1 error format.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\XgafvEnum $dollarXgafv
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=$.xgafv')]
    public ?\OpenAPI\OpenAPI\Models\Shared\XgafvEnum $dollarXgafv = null;
    
    /**
     * OAuth access token.
     * 
     * @var ?string $accessToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=access_token')]
    public ?string $accessToken = null;
    
    /**
     * Data format for response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=alt')]
    public ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt = null;
    
    /**
     * JSONP
     * 
     * @var ?string $callback
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=callback')]
    public ?string $callback = null;
    
    /**
     * Selector specifying which fields to include in a partial response.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fields')]
    public ?string $fields = null;
    
    /**
     * Specifies the localization language in which the system messages should be returned.
     * 
     * @var ?string $hl
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=hl')]
    public ?string $hl = null;
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * 
     * @var ?string $key
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=key')]
    public ?string $key = null;
    
    /**
     * The id of the live chat for which comments should be returned.
     * 
     * @var string $liveChatId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=liveChatId')]
    public string $liveChatId;
    
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * 
     * @var ?int $maxResults
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=maxResults')]
    public ?int $maxResults = null;
    
    /**
     * OAuth 2.0 token for the current user.
     * 
     * @var ?string $oauthToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=oauth_token')]
    public ?string $oauthToken = null;
    
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     * 
     * @var ?string $pageToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pageToken')]
    public ?string $pageToken = null;
    
    /**
     * The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
     * 
     * @var array<string> $part
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=part')]
    public array $part;
    
    /**
     * Returns response with indentations and line breaks.
     * 
     * @var ?bool $prettyPrint
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=prettyPrint')]
    public ?bool $prettyPrint = null;
    
    /**
     * Specifies the size of the profile image that should be returned for each user.
     * 
     * @var ?int $profileImageSize
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=profileImageSize')]
    public ?int $profileImageSize = null;
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * 
     * @var ?string $quotaUser
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=quotaUser')]
    public ?string $quotaUser = null;
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     * 
     * @var ?string $uploadType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=uploadType')]
    public ?string $uploadType = null;
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     * 
     * @var ?string $uploadProtocol
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=upload_protocol')]
    public ?string $uploadProtocol = null;
    
	public function __construct()
	{
		$this->dollarXgafv = null;
		$this->accessToken = null;
		$this->alt = null;
		$this->callback = null;
		$this->fields = null;
		$this->hl = null;
		$this->key = null;
		$this->liveChatId = "";
		$this->maxResults = null;
		$this->oauthToken = null;
		$this->pageToken = null;
		$this->part = [];
		$this->prettyPrint = null;
		$this->profileImageSize = null;
		$this->quotaUser = null;
		$this->uploadType = null;
		$this->uploadProtocol = null;
	}
}
