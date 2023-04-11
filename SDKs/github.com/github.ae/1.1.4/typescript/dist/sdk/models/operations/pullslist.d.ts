import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The direction of the sort. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
 */
export declare enum PullsListDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * What to sort results by. `popularity` will sort by the number of comments. `long-running` will sort by date created and will limit the results to pull requests that have been open for more than a month and have had activity within the past month.
 */
export declare enum PullsListSortEnum {
    Created = "created",
    Updated = "updated",
    Popularity = "popularity",
    LongRunning = "long-running"
}
/**
 * Either `open`, `closed`, or `all` to filter by state.
 */
export declare enum PullsListStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class PullsListRequest extends SpeakeasyBase {
    /**
     * Filter pulls by base branch name. Example: `gh-pages`.
     */
    base?: string;
    /**
     * The direction of the sort. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
     */
    direction?: PullsListDirectionEnum;
    /**
     * Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
     */
    head?: string;
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
     * What to sort results by. `popularity` will sort by the number of comments. `long-running` will sort by date created and will limit the results to pull requests that have been open for more than a month and have had activity within the past month.
     */
    sort?: PullsListSortEnum;
    /**
     * Either `open`, `closed`, or `all` to filter by state.
     */
    state?: PullsListStateEnum;
}
export declare class PullsListResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestSimples?: shared.PullRequestSimple[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
