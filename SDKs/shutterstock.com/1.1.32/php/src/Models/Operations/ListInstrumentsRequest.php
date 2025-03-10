<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ListInstrumentsRequest
{
    /**
     * Which language the instruments will be returned in
     * 
     * @var ?string $language
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=language')]
    public ?string $language = null;
    
	public function __construct()
	{
		$this->language = null;
	}
}
