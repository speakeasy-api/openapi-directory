<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetAutomationV4ActionsAppIdGetPageRequest
{
    /**
     * The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.
     * 
     * @var ?string $after
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=after')]
    public ?string $after = null;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=appId')]
    public int $appId;
    
    /**
     * Whether to include archived custom actions.
     * 
     * @var ?bool $archived
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=archived')]
    public ?bool $archived = null;
    
    /**
     * Maximum number of results per page.
     * 
     * @var ?int $limit
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=limit')]
    public ?int $limit = null;
    
	public function __construct()
	{
		$this->after = null;
		$this->appId = 0;
		$this->archived = null;
		$this->limit = null;
	}
}
