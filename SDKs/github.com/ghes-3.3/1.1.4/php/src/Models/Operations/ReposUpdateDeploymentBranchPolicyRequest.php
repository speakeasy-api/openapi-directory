<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ReposUpdateDeploymentBranchPolicyRequest
{
    /**
     * The unique identifier of the branch policy.
     * 
     * @var int $branchPolicyId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=branch_policy_id')]
    public int $branchPolicyId;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\DeploymentBranchPolicyNamePattern $deploymentBranchPolicyNamePattern;
    
    /**
     * The name of the environment.
     * 
     * @var string $environmentName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=environment_name')]
    public string $environmentName;
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     * 
     * @var string $owner
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
    /**
     * The name of the repository. The name is not case sensitive.
     * 
     * @var string $repo
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
	public function __construct()
	{
		$this->branchPolicyId = 0;
		$this->deploymentBranchPolicyNamePattern = new \OpenAPI\OpenAPI\Models\Shared\DeploymentBranchPolicyNamePattern();
		$this->environmentName = "";
		$this->owner = "";
		$this->repo = "";
	}
}
