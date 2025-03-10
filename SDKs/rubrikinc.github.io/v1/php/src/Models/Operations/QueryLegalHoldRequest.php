<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class QueryLegalHoldRequest
{
    /**
     * Limits the list to snapshots with holds created after a specified date.
     * 
     * @var ?\DateTime $afterDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=after_date,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $afterDate = null;
    
    /**
     * Limits the list to snapshots with holds created before a specified date.
     * 
     * @var ?\DateTime $beforeDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=before_date,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $beforeDate = null;
    
    /**
     * Limit the number of matches returned.
     * 
     * @var ?int $limit
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=limit')]
    public ?int $limit = null;
    
    /**
     * Limit the list to snapshot for the particular object.
     * 
     * @var ?string $objectId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=object_id')]
    public ?string $objectId = null;
    
    /**
     * Limits the list to objects that match a specified value for the object name.
     * 
     * @var ?string $objectName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=object_name')]
    public ?string $objectName = null;
    
    /**
     * Limits the list to objects that match a specified type.
     * 
     * @var ?string $objectType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=object_type')]
    public ?string $objectType = null;
    
    /**
     * An integer that specifies a number of initial matches to ignore.
     * 
     * @var ?int $offset
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=offset')]
    public ?int $offset = null;
    
    /**
     * Limits the list to snapshots which were placed on legal hold after a specified date.
     * 
     * @var ?\DateTime $placedOnHoldAfterDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=placed_on_hold_after_date,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $placedOnHoldAfterDate = null;
    
    /**
     * Limits the list to snapshots which were placed on legal hold before a specified date.
     * 
     * @var ?\DateTime $placedOnHoldBeforeDate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=placed_on_hold_before_date,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $placedOnHoldBeforeDate = null;
    
    /**
     * Specifies the type of snapshots to be returned.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\QueryLegalHoldSnapshotTypeEnum $snapshotType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=snapshot_type')]
    public ?QueryLegalHoldSnapshotTypeEnum $snapshotType = null;
    
    /**
     * The attribute used to sort summary information. The optional parameter **_sort_order_** specifies ascending or descending sort order.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\QueryLegalHoldSortByEnum $sortBy
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort_by')]
    public ?QueryLegalHoldSortByEnum $sortBy = null;
    
    /**
     * Specifies ascending or descending sort order. Summary results are sorted in ascending order when this parameter is not specified.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\QueryLegalHoldSortOrderEnum $sortOrder
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort_order')]
    public ?QueryLegalHoldSortOrderEnum $sortOrder = null;
    
	public function __construct()
	{
		$this->afterDate = null;
		$this->beforeDate = null;
		$this->limit = null;
		$this->objectId = null;
		$this->objectName = null;
		$this->objectType = null;
		$this->offset = null;
		$this->placedOnHoldAfterDate = null;
		$this->placedOnHoldBeforeDate = null;
		$this->snapshotType = null;
		$this->sortBy = null;
		$this->sortOrder = null;
	}
}
