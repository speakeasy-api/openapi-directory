<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudMemcacheV1beta2MaintenancePolicy - Maintenance policy per instance.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudMemcacheV1beta2MaintenancePolicy
{
    /**
     * Output only. The time when the policy was created.
     * 
     * @var ?string $createTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('createTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createTime = null;
    
    /**
     * Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * Output only. The time when the policy was updated.
     * 
     * @var ?string $updateTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('updateTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updateTime = null;
    
    /**
     * Required. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_maintenance_windows is expected to be one.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\WeeklyMaintenanceWindow> $weeklyMaintenanceWindow
     */
	#[\JMS\Serializer\Annotation\SerializedName('weeklyMaintenanceWindow')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\WeeklyMaintenanceWindow>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $weeklyMaintenanceWindow = null;
    
	public function __construct()
	{
		$this->createTime = null;
		$this->description = null;
		$this->updateTime = null;
		$this->weeklyMaintenanceWindow = null;
	}
}
