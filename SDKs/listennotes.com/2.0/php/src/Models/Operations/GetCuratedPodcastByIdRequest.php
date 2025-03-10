<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetCuratedPodcastByIdRequest
{
    /**
     * Get API Key on listennotes.com/api
     * 
     * @var string $xListenAPIKey
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=X-ListenAPI-Key')]
    public string $xListenAPIKey;
    
    /**
     * id for a specific curated list of podcasts. You can get the id from the response of `GET /search?type=curated` or `GET /curated_podcasts`.
     * 
     * 
     * 
     * @var string $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public string $id;
    
	public function __construct()
	{
		$this->xListenAPIKey = "";
		$this->id = "";
	}
}
