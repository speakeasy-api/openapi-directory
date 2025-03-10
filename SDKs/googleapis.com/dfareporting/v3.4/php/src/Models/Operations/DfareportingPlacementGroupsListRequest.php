<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DfareportingPlacementGroupsListRequest
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
     * Select only placement groups that belong to these advertisers.
     * 
     * @var ?array<string> $advertiserIds
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=advertiserIds')]
    public ?array $advertiserIds = null;
    
    /**
     * Data format for response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=alt')]
    public ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt = null;
    
    /**
     * Select only archived placements. Don't set this field to select both archived and non-archived placements.
     * 
     * @var ?bool $archived
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=archived')]
    public ?bool $archived = null;
    
    /**
     * JSONP
     * 
     * @var ?string $callback
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=callback')]
    public ?string $callback = null;
    
    /**
     * Select only placement groups that belong to these campaigns.
     * 
     * @var ?array<string> $campaignIds
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=campaignIds')]
    public ?array $campaignIds = null;
    
    /**
     * Select only placement groups that are associated with these content categories.
     * 
     * @var ?array<string> $contentCategoryIds
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=contentCategoryIds')]
    public ?array $contentCategoryIds = null;
    
    /**
     * Select only placement groups that are associated with these directory sites.
     * 
     * @var ?array<string> $directorySiteIds
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=directorySiteIds')]
    public ?array $directorySiteIds = null;
    
    /**
     * Selector specifying which fields to include in a partial response.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fields')]
    public ?string $fields = null;
    
    /**
     * Select only placement groups with these IDs.
     * 
     * @var ?array<string> $ids
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=ids')]
    public ?array $ids = null;
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * 
     * @var ?string $key
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=key')]
    public ?string $key = null;
    
    /**
     * Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     * 
     * @var ?string $maxEndDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=maxEndDate')]
    public ?string $maxEndDate = null;
    
    /**
     * Maximum number of results to return.
     * 
     * @var ?int $maxResults
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=maxResults')]
    public ?int $maxResults = null;
    
    /**
     * Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     * 
     * @var ?string $maxStartDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=maxStartDate')]
    public ?string $maxStartDate = null;
    
    /**
     * Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     * 
     * @var ?string $minEndDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=minEndDate')]
    public ?string $minEndDate = null;
    
    /**
     * Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     * 
     * @var ?string $minStartDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=minStartDate')]
    public ?string $minStartDate = null;
    
    /**
     * OAuth 2.0 token for the current user.
     * 
     * @var ?string $oauthToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=oauth_token')]
    public ?string $oauthToken = null;
    
    /**
     * Value of the nextPageToken from the previous result page.
     * 
     * @var ?string $pageToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pageToken')]
    public ?string $pageToken = null;
    
    /**
     * Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListPlacementGroupTypeEnum $placementGroupType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=placementGroupType')]
    public ?DfareportingPlacementGroupsListPlacementGroupTypeEnum $placementGroupType = null;
    
    /**
     * Select only placement groups that are associated with these placement strategies.
     * 
     * @var ?array<string> $placementStrategyIds
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=placementStrategyIds')]
    public ?array $placementStrategyIds = null;
    
    /**
     * Returns response with indentations and line breaks.
     * 
     * @var ?bool $prettyPrint
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=prettyPrint')]
    public ?bool $prettyPrint = null;
    
    /**
     * Select only placement groups with these pricing types.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListPricingTypesEnum> $pricingTypes
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pricingTypes')]
    public ?array $pricingTypes = null;
    
    /**
     * User profile ID associated with this request.
     * 
     * @var string $profileId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=profileId')]
    public string $profileId;
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * 
     * @var ?string $quotaUser
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=quotaUser')]
    public ?string $quotaUser = null;
    
    /**
     * Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
     * 
     * @var ?string $searchString
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=searchString')]
    public ?string $searchString = null;
    
    /**
     * Select only placement groups that are associated with these sites.
     * 
     * @var ?array<string> $siteIds
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=siteIds')]
    public ?array $siteIds = null;
    
    /**
     * Field by which to sort the list.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListSortFieldEnum $sortField
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sortField')]
    public ?DfareportingPlacementGroupsListSortFieldEnum $sortField = null;
    
    /**
     * Order of sorted results.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementGroupsListSortOrderEnum $sortOrder
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sortOrder')]
    public ?DfareportingPlacementGroupsListSortOrderEnum $sortOrder = null;
    
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
		$this->advertiserIds = null;
		$this->alt = null;
		$this->archived = null;
		$this->callback = null;
		$this->campaignIds = null;
		$this->contentCategoryIds = null;
		$this->directorySiteIds = null;
		$this->fields = null;
		$this->ids = null;
		$this->key = null;
		$this->maxEndDate = null;
		$this->maxResults = null;
		$this->maxStartDate = null;
		$this->minEndDate = null;
		$this->minStartDate = null;
		$this->oauthToken = null;
		$this->pageToken = null;
		$this->placementGroupType = null;
		$this->placementStrategyIds = null;
		$this->prettyPrint = null;
		$this->pricingTypes = null;
		$this->profileId = "";
		$this->quotaUser = null;
		$this->searchString = null;
		$this->siteIds = null;
		$this->sortField = null;
		$this->sortOrder = null;
		$this->uploadType = null;
		$this->uploadProtocol = null;
	}
}
