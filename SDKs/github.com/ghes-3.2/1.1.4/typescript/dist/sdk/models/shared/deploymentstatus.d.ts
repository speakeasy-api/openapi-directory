import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * The state of the status.
 */
export declare enum DeploymentStatusStateEnum {
    Error = "error",
    Failure = "failure",
    Inactive = "inactive",
    Pending = "pending",
    Success = "success",
    Queued = "queued",
    InProgress = "in_progress"
}
/**
 * The status of a deployment.
 */
export declare class DeploymentStatus extends SpeakeasyBase {
    createdAt: Date;
    /**
     * Simple User
     */
    creator: NullableSimpleUser;
    deploymentUrl: string;
    /**
     * A short description of the status.
     */
    description: string;
    /**
     * The environment of the deployment that the status is for.
     */
    environment?: string;
    /**
     * The URL for accessing your environment.
     */
    environmentUrl?: string;
    id: number;
    /**
     * The URL to associate with this status.
     */
    logUrl?: string;
    nodeId: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp?: NullableIntegration;
    repositoryUrl: string;
    /**
     * The state of the status.
     */
    state: DeploymentStatusStateEnum;
    /**
     * Deprecated: the URL to associate with this status.
     */
    targetUrl: string;
    updatedAt: Date;
    url: string;
}
