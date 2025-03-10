<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CompilationResult - Represents the result of compiling a Dataform project.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CompilationResult
{
    /**
     * Configures various aspects of Dataform code compilation.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CodeCompilationConfig $codeCompilationConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('codeCompilationConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CodeCompilationConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CodeCompilationConfig $codeCompilationConfig = null;
    
    /**
     * Output only. Errors encountered during project compilation.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CompilationError> $compilationErrors
     */
	#[\JMS\Serializer\Annotation\SerializedName('compilationErrors')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CompilationError>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $compilationErrors = null;
    
    /**
     * Output only. The version of `@dataform/core` that was used for compilation.
     * 
     * @var ?string $dataformCoreVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('dataformCoreVersion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dataformCoreVersion = null;
    
    /**
     * Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`
     * 
     * @var ?string $gitCommitish
     */
	#[\JMS\Serializer\Annotation\SerializedName('gitCommitish')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $gitCommitish = null;
    
    /**
     * Output only. The compilation result's name.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Immutable. The name of the release config to compile. The release config's 'current_compilation_result' field will be updated to this compilation result. Must be in the format `projects/* /locations/* /repositories/* /releaseConfigs/*`.
     * 
     * @var ?string $releaseConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('releaseConfig')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $releaseConfig = null;
    
    /**
     * Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace.
     * 
     * @var ?string $resolvedGitCommitSha
     */
	#[\JMS\Serializer\Annotation\SerializedName('resolvedGitCommitSha')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resolvedGitCommitSha = null;
    
    /**
     * Immutable. The name of the workspace to compile. Must be in the format `projects/* /locations/* /repositories/* /workspaces/*`.
     * 
     * @var ?string $workspace
     */
	#[\JMS\Serializer\Annotation\SerializedName('workspace')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $workspace = null;
    
	public function __construct()
	{
		$this->codeCompilationConfig = null;
		$this->compilationErrors = null;
		$this->dataformCoreVersion = null;
		$this->gitCommitish = null;
		$this->name = null;
		$this->releaseConfig = null;
		$this->resolvedGitCommitSha = null;
		$this->workspace = null;
	}
}
