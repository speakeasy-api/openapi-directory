<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Role - Kubernetes Role or ClusterRole.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Role
{
    /**
     * Role type.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\RoleKindEnum $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\RoleKindEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RoleKindEnum $kind = null;
    
    /**
     * Role name.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Role namespace.
     * 
     * @var ?string $ns
     */
	#[\JMS\Serializer\Annotation\SerializedName('ns')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ns = null;
    
	public function __construct()
	{
		$this->kind = null;
		$this->name = null;
		$this->ns = null;
	}
}
