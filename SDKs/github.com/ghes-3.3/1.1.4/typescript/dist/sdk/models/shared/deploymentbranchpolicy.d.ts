import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of a deployment branch policy.
 */
export declare class DeploymentBranchPolicy extends SpeakeasyBase {
    /**
     * The unique identifier of the branch policy.
     */
    id?: number;
    /**
     * The name pattern that branches must match in order to deploy to the environment.
     */
    name?: string;
    nodeId?: string;
}
