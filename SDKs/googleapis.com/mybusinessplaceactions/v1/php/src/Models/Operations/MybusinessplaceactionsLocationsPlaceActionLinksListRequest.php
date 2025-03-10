<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class MybusinessplaceactionsLocationsPlaceActionLinksListRequest
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
     * Optional. A filter constraining the place action links to return. The response includes entries that match the filter. We support only the following filter: 1. place_action_type=XYZ where XYZ is a valid PlaceActionType.
     * 
     * @var ?string $filter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filter')]
    public ?string $filter = null;
    
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
     * Optional. How many place action links to return per page. Default of 10. The minimum is 1.
     * 
     * @var ?int $pageSize
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pageSize')]
    public ?int $pageSize = null;
    
    /**
     * Optional. If specified, returns the next page of place action links.
     * 
     * @var ?string $pageToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pageToken')]
    public ?string $pageToken = null;
    
    /**
     * Required. The name of the location whose place action links will be listed. `locations/{location_id}`.
     * 
     * @var string $parent
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=parent')]
    public string $parent;
    
    /**
     * Returns response with indentations and line breaks.
     * 
     * @var ?bool $prettyPrint
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=prettyPrint')]
    public ?bool $prettyPrint = null;
    
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
		$this->filter = null;
		$this->key = null;
		$this->oauthToken = null;
		$this->pageSize = null;
		$this->pageToken = null;
		$this->parent = "";
		$this->prettyPrint = null;
		$this->quotaUser = null;
		$this->uploadType = null;
		$this->uploadProtocol = null;
	}
}
