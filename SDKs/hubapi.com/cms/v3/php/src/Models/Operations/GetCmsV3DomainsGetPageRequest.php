<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetCmsV3DomainsGetPageRequest
{
    /**
     * The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.
     * 
     * @var ?string $after
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=after')]
    public ?string $after = null;
    
    /**
     * Whether to return only results that have been archived.
     * 
     * @var ?bool $archived
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=archived')]
    public ?bool $archived = null;
    
    /**
     * Only return domains created after this date.
     * 
     * @var ?\DateTime $createdAfter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=createdAfter,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $createdAfter = null;
    
    /**
     * Only return domains created at this date.
     * 
     * @var ?\DateTime $createdAt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=createdAt,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $createdAt = null;
    
    /**
     * Only return domains created before this date.
     * 
     * @var ?\DateTime $createdBefore
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=createdBefore,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $createdBefore = null;
    
    /**
     * Maximum number of results per page.
     * 
     * @var ?int $limit
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=limit')]
    public ?int $limit = null;
    
    /**
     * $sort
     * 
     * @var ?array<string> $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort')]
    public ?array $sort = null;
    
    /**
     * Only return domains updated after this date.
     * 
     * @var ?\DateTime $updatedAfter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=updatedAfter,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $updatedAfter = null;
    
    /**
     * Only return domains updated at this date.
     * 
     * @var ?\DateTime $updatedAt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=updatedAt,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $updatedAt = null;
    
    /**
     * Only return domains updated before this date.
     * 
     * @var ?\DateTime $updatedBefore
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=updatedBefore,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $updatedBefore = null;
    
	public function __construct()
	{
		$this->after = null;
		$this->archived = null;
		$this->createdAfter = null;
		$this->createdAt = null;
		$this->createdBefore = null;
		$this->limit = null;
		$this->sort = null;
		$this->updatedAfter = null;
		$this->updatedAt = null;
		$this->updatedBefore = null;
	}
}
