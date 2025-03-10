<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetVVersionSitesSiteIdsRequest
{
    /**
     * site id
     * 
     * @var string $siteIds
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=site_Ids')]
    public string $siteIds;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=version')]
    public string $version;
    
	public function __construct()
	{
		$this->siteIds = "";
		$this->version = "";
	}
}
