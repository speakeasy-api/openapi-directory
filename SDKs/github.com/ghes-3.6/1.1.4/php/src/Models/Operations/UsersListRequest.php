<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UsersListRequest
{
    /**
     * The number of results per page (max 100).
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * A user ID. Only return users with an ID greater than this ID.
     * 
     * @var ?int $since
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=since')]
    public ?int $since = null;
    
	public function __construct()
	{
		$this->perPage = null;
		$this->since = null;
	}
}
