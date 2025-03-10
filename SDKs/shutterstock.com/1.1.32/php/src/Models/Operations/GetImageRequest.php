<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetImageRequest
{
    /**
     * Image ID
     * 
     * @var string $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public string $id;
    
    /**
     * Language for the keywords and categories in the response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\LanguageEnum $language
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=language')]
    public ?\OpenAPI\OpenAPI\Models\Shared\LanguageEnum $language = null;
    
    /**
     * The ID of the search that is related to this request
     * 
     * @var ?string $searchId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=search_id')]
    public ?string $searchId = null;
    
    /**
     * Amount of detail to render in the response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetImageViewEnum $view
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=view')]
    public ?GetImageViewEnum $view = null;
    
	public function __construct()
	{
		$this->id = "";
		$this->language = null;
		$this->searchId = null;
		$this->view = null;
	}
}
