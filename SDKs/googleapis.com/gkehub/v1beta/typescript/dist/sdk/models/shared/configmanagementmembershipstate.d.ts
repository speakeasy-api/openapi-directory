import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementBinauthzState } from "./configmanagementbinauthzstate";
import { ConfigManagementConfigSyncState } from "./configmanagementconfigsyncstate";
import { ConfigManagementHierarchyControllerState } from "./configmanagementhierarchycontrollerstate";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { ConfigManagementOperatorState } from "./configmanagementoperatorstate";
import { ConfigManagementPolicyControllerState } from "./configmanagementpolicycontrollerstate";
/**
 * **Anthos Config Management**: State for a single cluster.
 */
export declare class ConfigManagementMembershipState extends SpeakeasyBase {
    /**
     * State for Binauthz
     */
    binauthzState?: ConfigManagementBinauthzState;
    /**
     * The user-defined name for the cluster used by ClusterSelectors to group clusters together. This should match Membership's membership_name, unless the user installed ACM on the cluster manually prior to enabling the ACM hub feature. Unique within a Anthos Config Management installation.
     */
    clusterName?: string;
    /**
     * State information for ConfigSync
     */
    configSyncState?: ConfigManagementConfigSyncState;
    /**
     * State for Hierarchy Controller
     */
    hierarchyControllerState?: ConfigManagementHierarchyControllerState;
    /**
     * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
     */
    membershipSpec?: ConfigManagementMembershipSpec;
    /**
     * State information for an ACM's Operator
     */
    operatorState?: ConfigManagementOperatorState;
    /**
     * State for PolicyControllerState.
     */
    policyControllerState?: ConfigManagementPolicyControllerState;
}
