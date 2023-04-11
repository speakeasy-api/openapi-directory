import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementHierarchyControllerDeploymentState } from "./configmanagementhierarchycontrollerdeploymentstate";
import { ConfigManagementHierarchyControllerVersion } from "./configmanagementhierarchycontrollerversion";
/**
 * State for Hierarchy Controller
 */
export declare class ConfigManagementHierarchyControllerState extends SpeakeasyBase {
    /**
     * Deployment state for Hierarchy Controller
     */
    state?: ConfigManagementHierarchyControllerDeploymentState;
    /**
     * Version for Hierarchy Controller
     */
    version?: ConfigManagementHierarchyControllerVersion;
}
