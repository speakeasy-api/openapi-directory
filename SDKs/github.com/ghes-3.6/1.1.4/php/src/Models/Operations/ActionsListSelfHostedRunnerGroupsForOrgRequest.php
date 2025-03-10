<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ActionsListSelfHostedRunnerGroupsForOrgRequest
{
    /**
     * The organization name. The name is not case sensitive.
     * 
     * @var string $org
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=org')]
    public string $org;
    
    /**
     * Page number of the results to fetch.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * The number of results per page (max 100).
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * Only return runner groups that are allowed to be used by this repository.
     * 
     * @var ?string $visibleToRepository
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=visible_to_repository')]
    public ?string $visibleToRepository = null;
    
	public function __construct()
	{
		$this->org = "";
		$this->page = null;
		$this->perPage = null;
		$this->visibleToRepository = null;
	}
}
