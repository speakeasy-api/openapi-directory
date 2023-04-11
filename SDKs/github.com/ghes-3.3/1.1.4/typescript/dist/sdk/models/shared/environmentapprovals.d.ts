import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
export declare class EnvironmentApprovalsEnvironments extends SpeakeasyBase {
    /**
     * The time that the environment was created, in ISO 8601 format.
     */
    createdAt?: Date;
    htmlUrl?: string;
    /**
     * The id of the environment.
     */
    id?: number;
    /**
     * The name of the environment.
     */
    name?: string;
    nodeId?: string;
    /**
     * The time that the environment was last updated, in ISO 8601 format.
     */
    updatedAt?: Date;
    url?: string;
}
/**
 * Whether deployment to the environment(s) was approved or rejected
 */
export declare enum EnvironmentApprovalsStateEnum {
    Approved = "approved",
    Rejected = "rejected"
}
/**
 * An entry in the reviews log for environment deployments
 */
export declare class EnvironmentApprovals extends SpeakeasyBase {
    /**
     * The comment submitted with the deployment review
     */
    comment: string;
    /**
     * The list of environments that were approved or rejected
     */
    environments: EnvironmentApprovalsEnvironments[];
    /**
     * Whether deployment to the environment(s) was approved or rejected
     */
    state: EnvironmentApprovalsStateEnum;
    /**
     * A GitHub user.
     */
    user: SimpleUser;
}
