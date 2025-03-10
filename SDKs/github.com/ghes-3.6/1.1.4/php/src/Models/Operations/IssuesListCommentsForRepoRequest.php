<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class IssuesListCommentsForRepoRequest
{
    /**
     * Either `asc` or `desc`. Ignored without the `sort` parameter.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\IssuesListCommentsForRepoDirectionEnum $direction
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=direction')]
    public ?IssuesListCommentsForRepoDirectionEnum $direction = null;
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     * 
     * @var string $owner
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
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
     * The name of the repository. The name is not case sensitive.
     * 
     * @var string $repo
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * 
     * @var ?\DateTime $since
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=since,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $since = null;
    
    /**
     * The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SortEnum $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort')]
    public ?\OpenAPI\OpenAPI\Models\Shared\SortEnum $sort = null;
    
	public function __construct()
	{
		$this->direction = null;
		$this->owner = "";
		$this->page = null;
		$this->perPage = null;
		$this->repo = "";
		$this->since = null;
		$this->sort = null;
	}
}
