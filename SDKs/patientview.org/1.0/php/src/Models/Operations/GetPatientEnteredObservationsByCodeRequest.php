<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetPatientEnteredObservationsByCodeRequest
{
    /**
     * code
     * 
     * @var string $code
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=code')]
    public string $code;
    
    /**
     * userId
     * 
     * @var int $userId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=userId')]
    public int $userId;
    
	public function __construct()
	{
		$this->code = "";
		$this->userId = 0;
	}
}
