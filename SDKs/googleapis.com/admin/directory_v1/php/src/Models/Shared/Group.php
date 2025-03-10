<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Group - Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups). For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups). Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/admin-sdk/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Group
{
    /**
     * Read-only. Value is `true` if this group was created by an administrator rather than a user.
     * 
     * @var ?bool $adminCreated
     */
	#[\JMS\Serializer\Annotation\SerializedName('adminCreated')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $adminCreated = null;
    
    /**
     * Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.
     * 
     * @var ?array<string> $aliases
     */
	#[\JMS\Serializer\Annotation\SerializedName('aliases')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $aliases = null;
    
    /**
     * An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.
     * 
     * @var ?string $directMembersCount
     */
	#[\JMS\Serializer\Annotation\SerializedName('directMembersCount')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $directMembersCount = null;
    
    /**
     * The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.
     * 
     * @var ?string $email
     */
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $email = null;
    
    /**
     * ETag of the resource.
     * 
     * @var ?string $etag
     */
	#[\JMS\Serializer\Annotation\SerializedName('etag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $etag = null;
    
    /**
     * Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * The type of the API resource. For Groups resources, the value is `admin#directory#group`.
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * The group's display name.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.
     * 
     * @var ?array<string> $nonEditableAliases
     */
	#[\JMS\Serializer\Annotation\SerializedName('nonEditableAliases')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $nonEditableAliases = null;
    
	public function __construct()
	{
		$this->adminCreated = null;
		$this->aliases = null;
		$this->description = null;
		$this->directMembersCount = null;
		$this->email = null;
		$this->etag = null;
		$this->id = null;
		$this->kind = null;
		$this->name = null;
		$this->nonEditableAliases = null;
	}
}
