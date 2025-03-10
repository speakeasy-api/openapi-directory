<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ListWorkspaceListWorkspaceResponse - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ListWorkspaceListWorkspaceResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\ListWorkspaceListWorkspaceResponseMeta')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ListWorkspaceListWorkspaceResponseMeta $meta = null;
    
    /**
     * $workspaces
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\TaskrouterV1Workspace> $workspaces
     */
	#[\JMS\Serializer\Annotation\SerializedName('workspaces')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\TaskrouterV1Workspace>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $workspaces = null;
    
	public function __construct()
	{
		$this->meta = null;
		$this->workspaces = null;
	}
}
