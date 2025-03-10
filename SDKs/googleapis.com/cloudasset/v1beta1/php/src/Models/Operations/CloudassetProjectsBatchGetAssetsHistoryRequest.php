<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CloudassetProjectsBatchGetAssetsHistoryRequest
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
     * A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
     * 
     * @var ?array<string> $assetNames
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=assetNames')]
    public ?array $assetNames = null;
    
    /**
     * JSONP
     * 
     * @var ?string $callback
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=callback')]
    public ?string $callback = null;
    
    /**
     * Optional. The content type.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum $contentType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=contentType')]
    public ?CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum $contentType = null;
    
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
     * Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
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
     * End time of the time window (inclusive). If not specified, the current timestamp is used instead.
     * 
     * @var ?string $readTimeWindowEndTime
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=readTimeWindow.endTime')]
    public ?string $readTimeWindowEndTime = null;
    
    /**
     * Start time of the time window (exclusive).
     * 
     * @var ?string $readTimeWindowStartTime
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=readTimeWindow.startTime')]
    public ?string $readTimeWindowStartTime = null;
    
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
		$this->assetNames = null;
		$this->callback = null;
		$this->contentType = null;
		$this->fields = null;
		$this->key = null;
		$this->oauthToken = null;
		$this->parent = "";
		$this->prettyPrint = null;
		$this->quotaUser = null;
		$this->readTimeWindowEndTime = null;
		$this->readTimeWindowStartTime = null;
		$this->uploadType = null;
		$this->uploadProtocol = null;
	}
}
