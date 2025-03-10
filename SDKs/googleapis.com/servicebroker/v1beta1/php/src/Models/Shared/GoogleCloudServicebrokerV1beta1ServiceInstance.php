<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudServicebrokerV1beta1ServiceInstance - Message describing inputs to Provision and Update Service instance requests.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudServicebrokerV1beta1ServiceInstance
{
    /**
     * Platform specific contextual information under which the service instance
     * 
     * is to be provisioned. This replaces organization_guid and space_guid.
     * But can also contain anything.
     * Currently only used for logging context information.
     * 
     * @var ?array<string, mixed> $context
     */
	#[\JMS\Serializer\Annotation\SerializedName('context')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $context = null;
    
    /**
     * Output only. Timestamp for when the instance was created.
     * 
     * @var ?string $createTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('createTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createTime = null;
    
    /**
     * Output only. String containing the Deployment Manager deployment name that was created
     * 
     * for this instance,
     * 
     * @var ?string $deploymentName
     */
	#[\JMS\Serializer\Annotation\SerializedName('deploymentName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $deploymentName = null;
    
    /**
     * To return errors when GetInstance call is done via HTTP to be unified with
     * 
     * other methods.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * The id of the service instance. Must be unique within GCP project.
     * 
     * Maximum length is 64, GUID recommended.
     * Required.
     * 
     * @var ?string $instanceId
     */
	#[\JMS\Serializer\Annotation\SerializedName('instance_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $instanceId = null;
    
    /**
     * The platform GUID for the organization under which the service is to be
     * 
     * provisioned.
     * Required.
     * 
     * @var ?string $organizationGuid
     */
	#[\JMS\Serializer\Annotation\SerializedName('organization_guid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $organizationGuid = null;
    
    /**
     * Configuration options for the service instance.
     * 
     * Parameters is JSON object serialized to string.
     * 
     * @var ?array<string, mixed> $parameters
     */
	#[\JMS\Serializer\Annotation\SerializedName('parameters')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $parameters = null;
    
    /**
     * The ID of the plan. See `Service` and `Plan` resources for details.
     * 
     * Maximum length is 64, GUID recommended.
     * Required.
     * 
     * @var ?string $planId
     */
	#[\JMS\Serializer\Annotation\SerializedName('plan_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $planId = null;
    
    /**
     * Used only in UpdateServiceInstance request to optionally specify previous
     * 
     * fields.
     * 
     * @var ?array<string, mixed> $previousValues
     */
	#[\JMS\Serializer\Annotation\SerializedName('previous_values')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $previousValues = null;
    
    /**
     * Output only. The resource name of the instance, e.g.
     * 
     * projects/project_id/brokers/broker_id/service_instances/instance_id
     * 
     * @var ?string $resourceName
     */
	#[\JMS\Serializer\Annotation\SerializedName('resourceName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resourceName = null;
    
    /**
     * The id of the service. Must be a valid identifier of a service
     * 
     * contained in the list from a `ListServices()` call.
     * Maximum length is 64, GUID recommended.
     * Required.
     * 
     * @var ?string $serviceId
     */
	#[\JMS\Serializer\Annotation\SerializedName('service_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceId = null;
    
    /**
     * The identifier for the project space within the platform organization.
     * 
     * Required.
     * 
     * @var ?string $spaceGuid
     */
	#[\JMS\Serializer\Annotation\SerializedName('space_guid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $spaceGuid = null;
    
	public function __construct()
	{
		$this->context = null;
		$this->createTime = null;
		$this->deploymentName = null;
		$this->description = null;
		$this->instanceId = null;
		$this->organizationGuid = null;
		$this->parameters = null;
		$this->planId = null;
		$this->previousValues = null;
		$this->resourceName = null;
		$this->serviceId = null;
		$this->spaceGuid = null;
	}
}
