<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class InstitutionsDetailRequest
{
    /**
     * The unique identifier of the institution you wish to retrieve.
     * 
     * @var string $institutionId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=institution_id')]
    public string $institutionId;
    
	public function __construct()
	{
		$this->institutionId = "";
	}
}
