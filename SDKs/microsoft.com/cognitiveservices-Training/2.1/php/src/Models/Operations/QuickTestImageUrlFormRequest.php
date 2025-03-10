<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class QuickTestImageUrlFormRequest
{
    /**
     * An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\ImageUrl $imageUrl
     */
	#[SpeakeasyMetadata('request:mediaType=application/x-www-form-urlencoded')]
    public \OpenAPI\OpenAPI\Models\Shared\ImageUrl $imageUrl;
    
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Training-Key')]
    public string $trainingKey;
    
    /**
     * Optional. Specifies the id of a particular iteration to evaluate against.
     * 
     *             The default iteration for the project will be used when not specified.
     * 
     * @var ?string $iterationId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=iterationId')]
    public ?string $iterationId = null;
    
    /**
     * The project to evaluate against
     * 
     * @var string $projectId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=projectId')]
    public string $projectId;
    
	public function __construct()
	{
		$this->imageUrl = new \OpenAPI\OpenAPI\Models\Shared\ImageUrl();
		$this->trainingKey = "";
		$this->iterationId = null;
		$this->projectId = "";
	}
}
