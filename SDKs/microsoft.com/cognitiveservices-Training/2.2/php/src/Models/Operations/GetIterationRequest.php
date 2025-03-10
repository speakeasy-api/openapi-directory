<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetIterationRequest
{
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Training-Key')]
    public string $trainingKey;
    
    /**
     * The id of the iteration to get.
     * 
     * @var string $iterationId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=iterationId')]
    public string $iterationId;
    
    /**
     * The id of the project the iteration belongs to.
     * 
     * @var string $projectId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=projectId')]
    public string $projectId;
    
	public function __construct()
	{
		$this->trainingKey = "";
		$this->iterationId = "";
		$this->projectId = "";
	}
}
