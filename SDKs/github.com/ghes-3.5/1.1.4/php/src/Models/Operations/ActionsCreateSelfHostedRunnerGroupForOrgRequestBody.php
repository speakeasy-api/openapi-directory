<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody
{
    /**
     * Whether the runner group can be used by `public` repositories.
     * 
     * @var ?bool $allowsPublicRepositories
     */
	#[\JMS\Serializer\Annotation\SerializedName('allows_public_repositories')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $allowsPublicRepositories = null;
    
    /**
     * Name of the runner group.
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
    /**
     * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
     * 
     * @var ?bool $restrictedToWorkflows
     */
	#[\JMS\Serializer\Annotation\SerializedName('restricted_to_workflows')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $restrictedToWorkflows = null;
    
    /**
     * List of runner IDs to add to the runner group.
     * 
     * @var ?array<int> $runners
     */
	#[\JMS\Serializer\Annotation\SerializedName('runners')]
    #[\JMS\Serializer\Annotation\Type('array<int>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $runners = null;
    
    /**
     * List of repository IDs that can access the runner group.
     * 
     * @var ?array<int> $selectedRepositoryIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('selected_repository_ids')]
    #[\JMS\Serializer\Annotation\Type('array<int>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $selectedRepositoryIds = null;
    
    /**
     * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
     * 
     * @var ?array<string> $selectedWorkflows
     */
	#[\JMS\Serializer\Annotation\SerializedName('selected_workflows')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $selectedWorkflows = null;
    
    /**
     * Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum $visibility
     */
	#[\JMS\Serializer\Annotation\SerializedName('visibility')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum $visibility = null;
    
	public function __construct()
	{
		$this->allowsPublicRepositories = null;
		$this->name = "";
		$this->restrictedToWorkflows = null;
		$this->runners = null;
		$this->selectedRepositoryIds = null;
		$this->selectedWorkflows = null;
		$this->visibility = null;
	}
}
