<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class SourcesV1GetV1SourcesGetRequest
{
    /**
     * Change the number of results returned.
     * 
     * @var ?int $limit
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=limit')]
    public ?int $limit = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=name')]
    public ?string $name = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=offset')]
    public ?int $offset = null;
    
    /**
     * An enumeration.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnum $orderBy
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=order_by')]
    public ?SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnum $orderBy = null;
    
    /**
     * Paginate through results.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * Define sort order.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\SourcesV1GetV1SourcesGetSortSortEnum $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort')]
    public ?SourcesV1GetV1SourcesGetSortSortEnum $sort = null;
    
	public function __construct()
	{
		$this->limit = null;
		$this->name = null;
		$this->offset = null;
		$this->orderBy = null;
		$this->page = null;
		$this->sort = null;
	}
}
