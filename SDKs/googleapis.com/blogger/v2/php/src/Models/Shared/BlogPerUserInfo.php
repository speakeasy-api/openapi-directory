<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class BlogPerUserInfo
{
    /**
     * ID of the Blog resource.
     * 
     * @var ?string $blogId
     */
	#[\JMS\Serializer\Annotation\SerializedName('blogId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $blogId = null;
    
    /**
     * True if the user has Admin level access to the blog.
     * 
     * @var ?bool $hasAdminAccess
     */
	#[\JMS\Serializer\Annotation\SerializedName('hasAdminAccess')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $hasAdminAccess = null;
    
    /**
     * The kind of this entity. Always blogger#blogPerUserInfo.
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * The Photo Album Key for the user when adding photos to the blog.
     * 
     * @var ?string $photosAlbumKey
     */
	#[\JMS\Serializer\Annotation\SerializedName('photosAlbumKey')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $photosAlbumKey = null;
    
    /**
     * Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BlogPerUserInfoRoleEnum $role
     */
	#[\JMS\Serializer\Annotation\SerializedName('role')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\BlogPerUserInfoRoleEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?BlogPerUserInfoRoleEnum $role = null;
    
    /**
     * ID of the User.
     * 
     * @var ?string $userId
     */
	#[\JMS\Serializer\Annotation\SerializedName('userId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $userId = null;
    
	public function __construct()
	{
		$this->blogId = null;
		$this->hasAdminAccess = null;
		$this->kind = null;
		$this->photosAlbumKey = null;
		$this->role = null;
		$this->userId = null;
	}
}
