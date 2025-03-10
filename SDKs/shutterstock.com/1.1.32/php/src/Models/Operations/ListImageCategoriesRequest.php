<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ListImageCategoriesRequest
{
    /**
     * Language for the keywords and categories in the response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\LanguageEnum $language
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=language')]
    public ?\OpenAPI\OpenAPI\Models\Shared\LanguageEnum $language = null;
    
	public function __construct()
	{
		$this->language = null;
	}
}
