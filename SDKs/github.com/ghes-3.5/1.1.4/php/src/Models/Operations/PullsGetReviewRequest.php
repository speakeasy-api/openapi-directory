<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PullsGetReviewRequest
{
    /**
     * The account owner of the repository. The name is not case sensitive.
     * 
     * @var string $owner
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
    /**
     * The number that identifies the pull request.
     * 
     * @var int $pullNumber
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=pull_number')]
    public int $pullNumber;
    
    /**
     * The name of the repository. The name is not case sensitive.
     * 
     * @var string $repo
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
    /**
     * The unique identifier of the review.
     * 
     * @var int $reviewId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=review_id')]
    public int $reviewId;
    
	public function __construct()
	{
		$this->owner = "";
		$this->pullNumber = 0;
		$this->repo = "";
		$this->reviewId = 0;
	}
}
