<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ActivityListNotificationsForAuthenticatedUserRequest
{
    /**
     * If `true`, show notifications marked as read.
     * 
     * @var ?bool $all
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=all')]
    public ?bool $all = null;
    
    /**
     * Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * 
     * @var ?\DateTime $before
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=before,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $before = null;
    
    /**
     * Page number of the results to fetch.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * If `true`, only shows notifications in which the user is directly participating or mentioned.
     * 
     * @var ?bool $participating
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=participating')]
    public ?bool $participating = null;
    
    /**
     * The number of results per page (max 50).
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     * 
     * @var ?\DateTime $since
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=since,dateTimeFormat=Y-m-d\TH:i:s.up')]
    public ?\DateTime $since = null;
    
	public function __construct()
	{
		$this->all = null;
		$this->before = null;
		$this->page = null;
		$this->participating = null;
		$this->perPage = null;
		$this->since = null;
	}
}
