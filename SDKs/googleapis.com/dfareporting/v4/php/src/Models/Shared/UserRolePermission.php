<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UserRolePermission - Contains properties of a user role permission.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UserRolePermission
{
    /**
     * Levels of availability for a user role permission.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\UserRolePermissionAvailabilityEnum $availability
     */
	#[\JMS\Serializer\Annotation\SerializedName('availability')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\UserRolePermissionAvailabilityEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UserRolePermissionAvailabilityEnum $availability = null;
    
    /**
     * ID of this user role permission.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission".
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * Name of this user role permission.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * ID of the permission group that this user role permission belongs to.
     * 
     * @var ?string $permissionGroupId
     */
	#[\JMS\Serializer\Annotation\SerializedName('permissionGroupId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $permissionGroupId = null;
    
	public function __construct()
	{
		$this->availability = null;
		$this->id = null;
		$this->kind = null;
		$this->name = null;
		$this->permissionGroupId = null;
	}
}
