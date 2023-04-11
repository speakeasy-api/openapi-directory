import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementConfigSync } from "./configmanagementconfigsync";
import { ConfigManagementHierarchyControllerConfig } from "./configmanagementhierarchycontrollerconfig";
import { ConfigManagementPolicyController } from "./configmanagementpolicycontroller";
/**
 * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
 */
export declare class ConfigManagementMembershipSpec extends SpeakeasyBase {
    /**
     * Configuration for Config Sync
     */
    configSync?: ConfigManagementConfigSync;
    /**
     * Configuration for Hierarchy Controller
     */
    hierarchyController?: ConfigManagementHierarchyControllerConfig;
    /**
     * Configuration for Policy Controller
     */
    policyController?: ConfigManagementPolicyController;
    /**
     * Version of ACM installed.
     */
    version?: string;
}
