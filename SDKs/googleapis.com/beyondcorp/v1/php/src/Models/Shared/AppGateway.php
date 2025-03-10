<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AppGateway - A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AppGateway
{
    /**
     * Output only. A list of connections allocated for the Gateway
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AllocatedConnection> $allocatedConnections
     */
	#[\JMS\Serializer\Annotation\SerializedName('allocatedConnections')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AllocatedConnection>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $allocatedConnections = null;
    
    /**
     * Output only. Timestamp when the resource was created.
     * 
     * @var ?string $createTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('createTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createTime = null;
    
    /**
     * Optional. An arbitrary user-provided name for the AppGateway. Cannot exceed 64 characters.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
    /**
     * Required. The type of hosting used by the AppGateway.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AppGatewayHostTypeEnum $hostType
     */
	#[\JMS\Serializer\Annotation\SerializedName('hostType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\AppGatewayHostTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AppGatewayHostTypeEnum $hostType = null;
    
    /**
     * Optional. Resource labels to represent user provided metadata.
     * 
     * @var ?array<string, string> $labels
     */
	#[\JMS\Serializer\Annotation\SerializedName('labels')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $labels = null;
    
    /**
     * Required. Unique resource name of the AppGateway. The name is ignored when creating an AppGateway.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Output only. The current state of the AppGateway.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AppGatewayStateEnum $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\AppGatewayStateEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AppGatewayStateEnum $state = null;
    
    /**
     * Required. The type of network connectivity used by the AppGateway.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AppGatewayTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\AppGatewayTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AppGatewayTypeEnum $type = null;
    
    /**
     * Output only. A unique identifier for the instance generated by the system.
     * 
     * @var ?string $uid
     */
	#[\JMS\Serializer\Annotation\SerializedName('uid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uid = null;
    
    /**
     * Output only. Timestamp when the resource was last modified.
     * 
     * @var ?string $updateTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('updateTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updateTime = null;
    
    /**
     * Output only. Server-defined URI for this resource.
     * 
     * @var ?string $uri
     */
	#[\JMS\Serializer\Annotation\SerializedName('uri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uri = null;
    
	public function __construct()
	{
		$this->allocatedConnections = null;
		$this->createTime = null;
		$this->displayName = null;
		$this->hostType = null;
		$this->labels = null;
		$this->name = null;
		$this->state = null;
		$this->type = null;
		$this->uid = null;
		$this->updateTime = null;
		$this->uri = null;
	}
}
