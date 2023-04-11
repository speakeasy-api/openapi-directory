import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
/**
 * A deployment created as the result of an Actions check run from a workflow that references an environment
 */
export declare class DeploymentSimple extends SpeakeasyBase {
    createdAt: Date;
    description: string;
    /**
     * Name for the target deployment environment.
     */
    environment: string;
    /**
     * Unique identifier of the deployment
     */
    id: number;
    nodeId: string;
    originalEnvironment?: string;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp?: NullableIntegration;
    /**
     * Specifies if the given environment is one that end-users directly interact with. Default: false.
     */
    productionEnvironment?: boolean;
    repositoryUrl: string;
    statusesUrl: string;
    /**
     * Parameter to specify a task to execute
     */
    task: string;
    /**
     * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
     */
    transientEnvironment?: boolean;
    updatedAt: Date;
    url: string;
}
