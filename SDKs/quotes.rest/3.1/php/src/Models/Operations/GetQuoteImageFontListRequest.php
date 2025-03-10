<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetQuoteImageFontListRequest
{
    /**
     * Response is paged. This parameter determines where the response should start.
     * 
     * @var ?int $start
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=start')]
    public ?int $start = null;
    
	public function __construct()
	{
		$this->start = null;
	}
}
