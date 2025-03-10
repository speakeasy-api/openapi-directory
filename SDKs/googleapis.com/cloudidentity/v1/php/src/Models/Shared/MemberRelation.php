<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * MemberRelation - Message representing a transitive membership of a group.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class MemberRelation
{
    /**
     * Resource name for this member.
     * 
     * @var ?string $member
     */
	#[\JMS\Serializer\Annotation\SerializedName('member')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $member = null;
    
    /**
     * Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\EntityKey> $preferredMemberKey
     */
	#[\JMS\Serializer\Annotation\SerializedName('preferredMemberKey')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\EntityKey>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $preferredMemberKey = null;
    
    /**
     * The relation between the group and the transitive member.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\MemberRelationRelationTypeEnum $relationType
     */
	#[\JMS\Serializer\Annotation\SerializedName('relationType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MemberRelationRelationTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?MemberRelationRelationTypeEnum $relationType = null;
    
    /**
     * The membership role details (i.e name of role and expiry time).
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\TransitiveMembershipRole> $roles
     */
	#[\JMS\Serializer\Annotation\SerializedName('roles')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\TransitiveMembershipRole>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $roles = null;
    
	public function __construct()
	{
		$this->member = null;
		$this->preferredMemberKey = null;
		$this->relationType = null;
		$this->roles = null;
	}
}
