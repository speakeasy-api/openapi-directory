<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList - AccessList details
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList
{
    /**
     * VTY in ACL
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn $vtyIn
     */
	#[\JMS\Serializer\Annotation\SerializedName('vtyIn')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn $vtyIn = null;
    
    /**
     * VTY out ACL
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut $vtyOut
     */
	#[\JMS\Serializer\Annotation\SerializedName('vtyOut')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut $vtyOut = null;
    
	public function __construct()
	{
		$this->vtyIn = null;
		$this->vtyOut = null;
	}
}
