<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PullsCreateRequestBody
{
    /**
     * The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
     * 
     * @var string $base
     */
	#[\JMS\Serializer\Annotation\SerializedName('base')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $base;
    
    /**
     * The contents of the pull request.
     * 
     * @var ?string $body
     */
	#[\JMS\Serializer\Annotation\SerializedName('body')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $body = null;
    
    /**
     * Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://docs.github.com/enterprise-server@3.4/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.
     * 
     * @var ?bool $draft
     */
	#[\JMS\Serializer\Annotation\SerializedName('draft')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $draft = null;
    
    /**
     * The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
     * 
     * @var string $head
     */
	#[\JMS\Serializer\Annotation\SerializedName('head')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $head;
    
    /**
     * An issue in the repository to convert to a pull request. The issue title, body, and comments will become the title, body, and comments on the new pull request. Required unless `title` is specified.
     * 
     * @var ?int $issue
     */
	#[\JMS\Serializer\Annotation\SerializedName('issue')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $issue = null;
    
    /**
     * Indicates whether [maintainers can modify](https://docs.github.com/enterprise-server@3.4/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
     * 
     * @var ?bool $maintainerCanModify
     */
	#[\JMS\Serializer\Annotation\SerializedName('maintainer_can_modify')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $maintainerCanModify = null;
    
    /**
     * The title of the new pull request. Required unless `issue` is specified.
     * 
     * @var ?string $title
     */
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $title = null;
    
	public function __construct()
	{
		$this->base = "";
		$this->body = null;
		$this->draft = null;
		$this->head = "";
		$this->issue = null;
		$this->maintainerCanModify = null;
		$this->title = null;
	}
}
