<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * OSPolicyResourceRepositoryResourceZypperRepository - Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class OSPolicyResourceRepositoryResourceZypperRepository
{
    /**
     * Required. The location of the repository directory.
     * 
     * @var ?string $baseUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('baseUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $baseUrl = null;
    
    /**
     * The display name of the repository.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
    /**
     * URIs of GPG keys.
     * 
     * @var ?array<string> $gpgKeys
     */
	#[\JMS\Serializer\Annotation\SerializedName('gpgKeys')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $gpgKeys = null;
    
    /**
     * Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	public function __construct()
	{
		$this->baseUrl = null;
		$this->displayName = null;
		$this->gpgKeys = null;
		$this->id = null;
	}
}
