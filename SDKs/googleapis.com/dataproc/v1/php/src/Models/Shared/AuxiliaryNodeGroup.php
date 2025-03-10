<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AuxiliaryNodeGroup - Node group identification and configuration information.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AuxiliaryNodeGroup
{
    /**
     * Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\NodeGroup $nodeGroup
     */
	#[\JMS\Serializer\Annotation\SerializedName('nodeGroup')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NodeGroup')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?NodeGroup $nodeGroup = null;
    
    /**
     * Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
     * 
     * @var ?string $nodeGroupId
     */
	#[\JMS\Serializer\Annotation\SerializedName('nodeGroupId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nodeGroupId = null;
    
	public function __construct()
	{
		$this->nodeGroup = null;
		$this->nodeGroupId = null;
	}
}
