<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ConfigManagementMembershipState - **Anthos Config Management**: State for a single cluster.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ConfigManagementMembershipState
{
    /**
     * The user-defined name for the cluster used by ClusterSelectors to group clusters together. This should match Membership's membership_name, unless the user installed ACM on the cluster manually prior to enabling the ACM hub feature. Unique within a Anthos Config Management installation.
     * 
     * @var ?string $clusterName
     */
	#[\JMS\Serializer\Annotation\SerializedName('clusterName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clusterName = null;
    
    /**
     * State information for ConfigSync
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ConfigManagementConfigSyncState $configSyncState
     */
	#[\JMS\Serializer\Annotation\SerializedName('configSyncState')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConfigManagementConfigSyncState')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ConfigManagementConfigSyncState $configSyncState = null;
    
    /**
     * State for Hierarchy Controller
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ConfigManagementHierarchyControllerState $hierarchyControllerState
     */
	#[\JMS\Serializer\Annotation\SerializedName('hierarchyControllerState')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConfigManagementHierarchyControllerState')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ConfigManagementHierarchyControllerState $hierarchyControllerState = null;
    
    /**
     * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ConfigManagementMembershipSpec $membershipSpec
     */
	#[\JMS\Serializer\Annotation\SerializedName('membershipSpec')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConfigManagementMembershipSpec')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ConfigManagementMembershipSpec $membershipSpec = null;
    
    /**
     * State information for an ACM's Operator
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ConfigManagementOperatorState $operatorState
     */
	#[\JMS\Serializer\Annotation\SerializedName('operatorState')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConfigManagementOperatorState')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ConfigManagementOperatorState $operatorState = null;
    
    /**
     * State for PolicyControllerState.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ConfigManagementPolicyControllerState $policyControllerState
     */
	#[\JMS\Serializer\Annotation\SerializedName('policyControllerState')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ConfigManagementPolicyControllerState')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ConfigManagementPolicyControllerState $policyControllerState = null;
    
	public function __construct()
	{
		$this->clusterName = null;
		$this->configSyncState = null;
		$this->hierarchyControllerState = null;
		$this->membershipSpec = null;
		$this->operatorState = null;
		$this->policyControllerState = null;
	}
}
