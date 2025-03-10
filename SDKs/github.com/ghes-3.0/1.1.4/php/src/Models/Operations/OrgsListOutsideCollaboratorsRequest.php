<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class OrgsListOutsideCollaboratorsRequest
{
    /**
     * Filter the list of outside collaborators. Can be one of:  
     * 
     * \* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.  
     * \* `all`: All outside collaborators.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\OrgsListOutsideCollaboratorsFilterEnum $filter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filter')]
    public ?OrgsListOutsideCollaboratorsFilterEnum $filter = null;
    
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
     * Results per page (max 100)
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
	public function __construct()
	{
		$this->filter = null;
		$this->org = "";
		$this->page = null;
		$this->perPage = null;
	}
}
