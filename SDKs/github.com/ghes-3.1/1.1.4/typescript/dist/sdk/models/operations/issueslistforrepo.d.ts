import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * What to sort results by. Can be either `created`, `updated`, `comments`.
 */
export declare enum IssuesListForRepoSortEnum {
    Created = "created",
    Updated = "updated",
    Comments = "comments"
}
/**
 * Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
 */
export declare enum IssuesListForRepoStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class IssuesListForRepoRequest extends SpeakeasyBase {
    /**
     * Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
     */
    assignee?: string;
    /**
     * The user that created the issue.
     */
    creator?: string;
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * A list of comma separated label names. Example: `bug,ui,@high`
     */
    labels?: string;
    /**
     * A user that's mentioned in the issue.
     */
    mentioned?: string;
    /**
     * If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
     */
    milestone?: string;
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
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
    /**
     * What to sort results by. Can be either `created`, `updated`, `comments`.
     */
    sort?: IssuesListForRepoSortEnum;
    /**
     * Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
     */
    state?: IssuesListForRepoStateEnum;
}
export declare class IssuesListForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Moved permanently
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    issues?: shared.Issue[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
