<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * EntityUserLinkPermissions - Permissions the user has for this entity.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class EntityUserLinkPermissions
{
    /**
     * Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only.
     * 
     * @var ?array<string> $effective
     */
	#[\JMS\Serializer\Annotation\SerializedName('effective')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $effective = null;
    
    /**
     * Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.
     * 
     * @var ?array<string> $local
     */
	#[\JMS\Serializer\Annotation\SerializedName('local')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $local = null;
    
	public function __construct()
	{
		$this->effective = null;
		$this->local = null;
	}
}
