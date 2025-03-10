<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ReposUpdatePullRequestReviewProtectionRequestBodyBypassPullRequestAllowances - Allow specific users, teams, or apps to bypass pull request requirements.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ReposUpdatePullRequestReviewProtectionRequestBodyBypassPullRequestAllowances
{
    /**
     * The list of app `slug`s allowed to bypass pull request requirements.
     * 
     * @var ?array<string> $apps
     */
	#[\JMS\Serializer\Annotation\SerializedName('apps')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $apps = null;
    
    /**
     * The list of team `slug`s allowed to bypass pull request requirements.
     * 
     * @var ?array<string> $teams
     */
	#[\JMS\Serializer\Annotation\SerializedName('teams')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $teams = null;
    
    /**
     * The list of user `login`s allowed to bypass pull request requirements.
     * 
     * @var ?array<string> $users
     */
	#[\JMS\Serializer\Annotation\SerializedName('users')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $users = null;
    
	public function __construct()
	{
		$this->apps = null;
		$this->teams = null;
		$this->users = null;
	}
}
