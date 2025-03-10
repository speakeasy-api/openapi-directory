<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class NodeGroupNode
{
    /**
     * Accelerators for this node.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig> $accelerators
     */
	#[\JMS\Serializer\Annotation\SerializedName('accelerators')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AcceleratorConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $accelerators = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('consumedResources')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\InstanceConsumptionInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InstanceConsumptionInfo $consumedResources = null;
    
    /**
     * CPU overcommit.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\NodeGroupNodeCpuOvercommitTypeEnum $cpuOvercommitType
     */
	#[\JMS\Serializer\Annotation\SerializedName('cpuOvercommitType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\NodeGroupNodeCpuOvercommitTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?NodeGroupNodeCpuOvercommitTypeEnum $cpuOvercommitType = null;
    
    /**
     * Local disk configurations.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\LocalDisk> $disks
     */
	#[\JMS\Serializer\Annotation\SerializedName('disks')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\LocalDisk>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $disks = null;
    
    /**
     * Instance data that shows consumed resources on the node.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\InstanceConsumptionData> $instanceConsumptionData
     */
	#[\JMS\Serializer\Annotation\SerializedName('instanceConsumptionData')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\InstanceConsumptionData>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $instanceConsumptionData = null;
    
    /**
     * Instances scheduled on this node.
     * 
     * @var ?array<string> $instances
     */
	#[\JMS\Serializer\Annotation\SerializedName('instances')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $instances = null;
    
    /**
     * The name of the node.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The type of this node.
     * 
     * @var ?string $nodeType
     */
	#[\JMS\Serializer\Annotation\SerializedName('nodeType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nodeType = null;
    
    /**
     * [Output Only] Reserved for future use.
     * 
     * @var ?bool $satisfiesPzs
     */
	#[\JMS\Serializer\Annotation\SerializedName('satisfiesPzs')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $satisfiesPzs = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('serverBinding')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ServerBinding')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ServerBinding $serverBinding = null;
    
    /**
     * Server ID associated with this node.
     * 
     * @var ?string $serverId
     */
	#[\JMS\Serializer\Annotation\SerializedName('serverId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serverId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\NodeGroupNodeStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?NodeGroupNodeStatusEnum $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('totalResources')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\InstanceConsumptionInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InstanceConsumptionInfo $totalResources = null;
    
	public function __construct()
	{
		$this->accelerators = null;
		$this->consumedResources = null;
		$this->cpuOvercommitType = null;
		$this->disks = null;
		$this->instanceConsumptionData = null;
		$this->instances = null;
		$this->name = null;
		$this->nodeType = null;
		$this->satisfiesPzs = null;
		$this->serverBinding = null;
		$this->serverId = null;
		$this->status = null;
		$this->totalResources = null;
	}
}
