<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AccountPermissionGroupsListResponse - Account Permission Group List Response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AccountPermissionGroupsListResponse
{
    /**
     * Account permission group collection.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AccountPermissionGroup> $accountPermissionGroups
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountPermissionGroups')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AccountPermissionGroup>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $accountPermissionGroups = null;
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupsListResponse".
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
	public function __construct()
	{
		$this->accountPermissionGroups = null;
		$this->kind = null;
	}
}
