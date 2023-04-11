import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetWorkflowRunAttemptRequest extends SpeakeasyBase {
    /**
     * The attempt number of the workflow run.
     */
    attemptNumber: number;
    /**
     * If `true` pull requests are omitted from the response (empty array).
     */
    excludePullRequests?: boolean;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the workflow run.
     */
    runId: number;
}
export declare class ActionsGetWorkflowRunAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    workflowRun?: shared.WorkflowRun;
}
