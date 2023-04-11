import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListWorkflowRunsRequest extends SpeakeasyBase {
    /**
     * Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
     */
    actor?: string;
    /**
     * Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
     */
    branch?: string;
    /**
     * Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/enterprise-server@3.3/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     */
    created?: Date;
    /**
     * Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/enterprise-server@3.3/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
     */
    event?: string;
    /**
     * If `true` pull requests are omitted from the response (empty array).
     */
    excludePullRequests?: boolean;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
     */
    status?: shared.WorkflowRunStatusEnum;
    /**
     * The ID of the workflow. You can also pass the workflow file name as a string.
     */
    workflowId: any;
}
/**
 * Response
 */
export declare class ActionsListWorkflowRuns200ApplicationJSON extends SpeakeasyBase {
    totalCount: number;
    workflowRuns: shared.WorkflowRun[];
}
export declare class ActionsListWorkflowRunsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListWorkflowRuns200ApplicationJSONObject?: ActionsListWorkflowRuns200ApplicationJSON;
}
