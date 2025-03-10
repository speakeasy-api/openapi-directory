<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetV2AccountsJsonRequest
{
    /**
     * Filters accounts by account_stage_id. Multiple account_stage_ids can be applied. An additional value of "_is_null" can be passed to filter accounts that do not have account_stage_id
     * 
     * @var ?array<int> $accountStageId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=account_stage_id')]
    public ?array $accountStageId = null;
    
    /**
     * Filters accounts by account_tier_id. Multiple account tier ids can be applied
     * 
     * @var ?array<int> $accountTierId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=account_tier_id')]
    public ?array $accountTierId = null;
    
    /**
     * Filters accounts by archived_at status. Returns only accounts where archived_at is not null if this field is true. Returns only accounts where archived_at is null if this field is false. Do not pass this parameter to return both archived and unarchived accounts. This filter is not applied if any value other than "true" or "false" is passed.
     * 
     * @var ?bool $archived
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=archived')]
    public ?bool $archived = null;
    
    /**
     * Filters accounts by city by exact match. Supports partial matching
     * 
     * @var ?array<string> $city
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=city')]
    public ?array $city = null;
    
    /**
     * Filters accounts by country by exact match. Supports partial matching
     * 
     * @var ?array<string> $country
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=country')]
    public ?array $country = null;
    
    /**
     * Equality filters that are applied to the created_at field. A single filter can be used by itself or combined with other filters to create a range.
     * 
     * 
     * ---CUSTOM---
     * {"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}
     * 
     * 
     * @var ?array<string> $createdAt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=created_at')]
    public ?array $createdAt = null;
    
    /**
     * Filters accounts by crm_id. Multiple crm ids can be applied
     * 
     * @var ?array<string> $crmId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=crm_id')]
    public ?array $crmId = null;
    
    /**
     * Filters by accounts matching all given custom fields. The custom field names are case-sensitive, but the provided values are case-insensitive. Example: v2/accounts?custom_fields[custom_field_name]=custom_field_value
     * 
     * @var ?array<string, mixed> $customFields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=custom_fields')]
    public ?array $customFields = null;
    
    /**
     * Domain of the accounts to fetch. Domains are unique and lowercase
     * 
     * @var ?string $domain
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=domain')]
    public ?string $domain = null;
    
    /**
     * IDs of accounts to fetch. If a record can't be found, that record won't be returned and your request will be successful
     * 
     * @var ?array<int> $ids
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=ids')]
    public ?array $ids = null;
    
    /**
     * Whether to include total_pages and total_count in the metadata. Defaults to false
     * 
     * @var ?bool $includePagingCounts
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=include_paging_counts')]
    public ?bool $includePagingCounts = null;
    
    /**
     * Filters accounts by industry by exact match. Supports partial matching
     * 
     * @var ?array<string> $industry
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=industry')]
    public ?array $industry = null;
    
    /**
     * Equality filters that are applied to the last_contacted field. A single filter can be used by itself or combined with other filters to create a range.
     * 
     * Additional values of "_is_null" or "_is_not_null" can be passed to filter records that either have no timestamp value or any timestamp value.
     * ---CUSTOM---
     * {"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}
     * 
     * 
     * @var ?array<string, mixed> $lastContacted
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=last_contacted')]
    public ?array $lastContacted = null;
    
    /**
     * Specifies whether the max limit of 10k records should be applied to pagination counts. Affects the total_count and total_pages data
     * 
     * @var ?bool $limitPagingCounts
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=limit_paging_counts')]
    public ?bool $limitPagingCounts = null;
    
    /**
     * Filters accounts by locale. Multiple locales are allowed
     * 
     * @var ?array<string> $locales
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=locales')]
    public ?array $locales = null;
    
    /**
     * Names of accounts to fetch. Name matches are exact and case sensitive. Multiple names can be fetched.
     * 
     * @var ?array<string> $name
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=name')]
    public ?array $name = null;
    
    /**
     * Filters accounts by owner_crm_id. Multiple owner_crm_ids can be applied. An additional value of "_is_null" can be passed to filter accounts that are unowned. A "_not_in" modifier can be used to exclude specific owner_crm_ids. Example: v2/accounts?owner_crm_id[_not_in]=id
     * 
     * @var ?array<string> $ownerCrmId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=owner_crm_id')]
    public ?array $ownerCrmId = null;
    
    /**
     * Filters accounts by owner_id. Multiple owner_ids can be applied. An additional value of "_is_null" can be passed to filter accounts that are unowned
     * 
     * @var ?array<string> $ownerId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=owner_id')]
    public ?array $ownerId = null;
    
    /**
     * Filters accounts by whether the owner is active or not.
     * 
     * @var ?bool $ownerIsActive
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=owner_is_active')]
    public ?bool $ownerIsActive = null;
    
    /**
     * The current page to fetch results from. Defaults to 1
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * Key to sort on, must be one of: created_at, updated_at, last_contacted_at, account_stage, account_stage_name, account_tier, account_tier_name, name, counts_people. Defaults to updated_at
     * 
     * @var ?string $sortBy
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort_by')]
    public ?string $sortBy = null;
    
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     * 
     * @var ?string $sortDirection
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort_direction')]
    public ?string $sortDirection = null;
    
    /**
     * Filters accounts by state by exact match. Supports partial matching
     * 
     * @var ?array<string> $state
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=state')]
    public ?array $state = null;
    
    /**
     * Filters accounts by the tags applied to the account. Multiple tags can be applied
     * 
     * @var ?array<string> $tag
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=tag')]
    public ?array $tag = null;
    
    /**
     * Filters accounts by the tag id's applied to the account. Multiple tag id's can be applied
     * 
     * @var ?array<int> $tagId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=tag_id')]
    public ?array $tagId = null;
    
    /**
     * Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
     * 
     * 
     * ---CUSTOM---
     * {"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}
     * 
     * 
     * @var ?array<string> $updatedAt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=updated_at')]
    public ?array $updatedAt = null;
    
    /**
     * Filters by accounts matching all given user relationship fields, _is_null or _unmapped can be passed to filter accounts with null or unmapped user relationship values. Example: v2/accounts?user_relationships[name]=value
     * 
     * @var ?array<string, mixed> $userRelationships
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=user_relationships')]
    public ?array $userRelationships = null;
    
    /**
     * Filters accounts by website. Multiple websites can be applied. An additional value of "_is_null" can be passed to filter accounts that do not have a website.
     * 
     * @var ?array<string> $website
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=false,name=website')]
    public ?array $website = null;
    
	public function __construct()
	{
		$this->accountStageId = null;
		$this->accountTierId = null;
		$this->archived = null;
		$this->city = null;
		$this->country = null;
		$this->createdAt = null;
		$this->crmId = null;
		$this->customFields = null;
		$this->domain = null;
		$this->ids = null;
		$this->includePagingCounts = null;
		$this->industry = null;
		$this->lastContacted = null;
		$this->limitPagingCounts = null;
		$this->locales = null;
		$this->name = null;
		$this->ownerCrmId = null;
		$this->ownerId = null;
		$this->ownerIsActive = null;
		$this->page = null;
		$this->perPage = null;
		$this->sortBy = null;
		$this->sortDirection = null;
		$this->state = null;
		$this->tag = null;
		$this->tagId = null;
		$this->updatedAt = null;
		$this->userRelationships = null;
		$this->website = null;
	}
}
