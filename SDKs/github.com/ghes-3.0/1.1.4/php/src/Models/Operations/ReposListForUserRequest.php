<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ReposListForUserRequest
{
    /**
     * Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReposListForUserDirectionEnum $direction
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=direction')]
    public ?ReposListForUserDirectionEnum $direction = null;
    
    /**
     * Page number of the results to fetch.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * Results per page (max 100)
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * Can be one of `created`, `updated`, `pushed`, `full_name`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReposListForUserSortEnum $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort')]
    public ?ReposListForUserSortEnum $sort = null;
    
    /**
     * Can be one of `all`, `owner`, `member`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ReposListForUserTypeEnum $type
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=type')]
    public ?ReposListForUserTypeEnum $type = null;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=username')]
    public string $username;
    
	public function __construct()
	{
		$this->direction = null;
		$this->page = null;
		$this->perPage = null;
		$this->sort = null;
		$this->type = null;
		$this->username = "";
	}
}
