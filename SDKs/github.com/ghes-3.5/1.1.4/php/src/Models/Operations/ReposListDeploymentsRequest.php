<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ReposListDeploymentsRequest
{
    /**
     * The name of the environment that was deployed to (e.g., `staging` or `production`).
     * 
     * @var ?string $environment
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=environment')]
    public ?string $environment = null;
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     * 
     * @var string $owner
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
    /**
     * Page number of the results to fetch.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * The number of results per page (max 100).
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * The name of the ref. This can be a branch, tag, or SHA.
     * 
     * @var ?string $ref
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=ref')]
    public ?string $ref = null;
    
    /**
     * The name of the repository. The name is not case sensitive.
     * 
     * @var string $repo
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
    /**
     * The SHA recorded at creation time.
     * 
     * @var ?string $sha
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sha')]
    public ?string $sha = null;
    
    /**
     * The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
     * 
     * @var ?string $task
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=task')]
    public ?string $task = null;
    
	public function __construct()
	{
		$this->environment = null;
		$this->owner = "";
		$this->page = null;
		$this->perPage = null;
		$this->ref = null;
		$this->repo = "";
		$this->sha = null;
		$this->task = null;
	}
}
