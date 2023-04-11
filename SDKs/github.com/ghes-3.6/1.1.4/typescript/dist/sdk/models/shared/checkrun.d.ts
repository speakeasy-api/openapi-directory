import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentSimple } from "./deploymentsimple";
import { NullableIntegration } from "./nullableintegration";
import { PullRequestMinimal } from "./pullrequestminimal";
export declare class CheckRunCheckSuite extends SpeakeasyBase {
    id: number;
}
export declare enum CheckRunConclusionEnum {
    Success = "success",
    Failure = "failure",
    Neutral = "neutral",
    Cancelled = "cancelled",
    Skipped = "skipped",
    TimedOut = "timed_out",
    ActionRequired = "action_required"
}
export declare class CheckRunOutput extends SpeakeasyBase {
    annotationsCount: number;
    annotationsUrl: string;
    summary: string;
    text: string;
    title: string;
}
/**
 * The phase of the lifecycle that the check is currently in.
 */
export declare enum CheckRunStatusEnum {
    Queued = "queued",
    InProgress = "in_progress",
    Completed = "completed"
}
/**
 * A check performed on the code of a given code change
 */
export declare class CheckRun extends SpeakeasyBase {
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     */
    app: NullableIntegration;
    checkSuite: CheckRunCheckSuite;
    completedAt: Date;
    conclusion: CheckRunConclusionEnum;
    /**
     * A deployment created as the result of an Actions check run from a workflow that references an environment
     */
    deployment?: DeploymentSimple;
    detailsUrl: string;
    externalId: string;
    /**
     * The SHA of the commit that is being checked.
     */
    headSha: string;
    htmlUrl: string;
    /**
     * The id of the check.
     */
    id: number;
    /**
     * The name of the check.
     */
    name: string;
    nodeId: string;
    output: CheckRunOutput;
    pullRequests: PullRequestMinimal[];
    startedAt: Date;
    /**
     * The phase of the lifecycle that the check is currently in.
     */
    status: CheckRunStatusEnum;
    url: string;
}
