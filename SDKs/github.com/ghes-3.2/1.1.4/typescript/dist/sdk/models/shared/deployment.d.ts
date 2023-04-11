import { SpeakeasyBase } from "../../../internal/utils";
import { NullableIntegration } from "./nullableintegration";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * A request for a specific ref(branch,sha,tag) to be deployed
 */
export declare class Deployment extends SpeakeasyBase {
    createdAt: Date;
    /**
     * Simple User
     */
    creator: NullableSimpleUser;
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
    payload: any;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    performedViaGithubApp?: NullableIntegration;
    /**
     * Specifies if the given environment is one that end-users directly interact with. Default: false.
     */
    productionEnvironment?: boolean;
    /**
     * The ref to deploy. This can be a branch, tag, or sha.
     */
    ref: string;
    repositoryUrl: string;
    sha: string;
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
