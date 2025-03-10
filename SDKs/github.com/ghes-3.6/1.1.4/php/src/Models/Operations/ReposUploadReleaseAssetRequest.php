<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ReposUploadReleaseAssetRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/octet-stream')]
    public ?string $requestBody = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=label')]
    public ?string $label = null;
    
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=name')]
    public string $name;
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     * 
     * @var string $owner
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
    /**
     * The unique identifier of the release.
     * 
     * @var int $releaseId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=release_id')]
    public int $releaseId;
    
    /**
     * The name of the repository. The name is not case sensitive.
     * 
     * @var string $repo
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
	public function __construct()
	{
		$this->requestBody = null;
		$this->label = null;
		$this->name = "";
		$this->owner = "";
		$this->releaseId = 0;
		$this->repo = "";
	}
}
