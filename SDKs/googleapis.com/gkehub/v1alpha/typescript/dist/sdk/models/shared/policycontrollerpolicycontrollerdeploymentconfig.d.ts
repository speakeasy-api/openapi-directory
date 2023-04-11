import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerResourceRequirements } from "./policycontrollerresourcerequirements";
import { PolicyControllerToleration } from "./policycontrollertoleration";
/**
 * Deployment-specific configuration.
 */
export declare class PolicyControllerPolicyControllerDeploymentConfig extends SpeakeasyBase {
    /**
     * ResourceRequirements describes the compute resource requirements.
     */
    containerResources?: PolicyControllerResourceRequirements;
    /**
     * Pod anti-affinity enablement.
     */
    podAntiAffinity?: boolean;
    /**
     * Pod tolerations of node taints.
     */
    podTolerations?: PolicyControllerToleration[];
    /**
     * Pod replica count.
     */
    replicaCount?: string;
}
