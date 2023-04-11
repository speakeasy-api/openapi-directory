import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListWorkflowRunsForRepoRequest extends SpeakeasyBase {
    /**
     * Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
     */
    actor?: string;
    /**
     * Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
     */
    branch?: string;
    /**
     * Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/enterprise-server@3.0/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     */
    created?: Date;
    /**
     * Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
     */
    event?: string;
    /**
     * If `true` pull requests are omitted from the response (empty array).
     */
    excludePullRequests?: boolean;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
    /**
     * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`. For a list of the possible `status` and `conclusion` options, see "[Create a check run](https://docs.github.com/enterprise-server@3.0/rest/reference/checks#create-a-check-run)."
     */
    status?: shared.WorkflowRunStatusEnum;
}
/**
 * Response
 */
export declare class ActionsListWorkflowRunsForRepo200ApplicationJSON extends SpeakeasyBase {
    totalCount: number;
    workflowRuns: shared.WorkflowRun[];
}
export declare class ActionsListWorkflowRunsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListWorkflowRunsForRepo200ApplicationJSONObject?: ActionsListWorkflowRunsForRepo200ApplicationJSON;
}
