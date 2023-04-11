import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
 */
export declare enum ReposListForAuthenticatedUserDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The property to short the results by.
 */
export declare enum ReposListForAuthenticatedUserSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
/**
 * Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
 */
export declare enum ReposListForAuthenticatedUserTypeEnum {
    All = "all",
    Owner = "owner",
    Internal = "internal",
    Private = "private",
    Member = "member"
}
/**
 * Limit results to repositories with the specified visibility.
 */
export declare enum ReposListForAuthenticatedUserVisibilityEnum {
    All = "all",
    Internal = "internal",
    Private = "private"
}
export declare class ReposListForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of values. Can include:
     *
     * @remarks
     *  * `owner`: Repositories that are owned by the authenticated user.
     *  * `collaborator`: Repositories that the user has been added to as a collaborator.
     *  * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
     */
    affiliation?: string;
    /**
     * Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    before?: Date;
    /**
     * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
     */
    direction?: ReposListForAuthenticatedUserDirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
    /**
     * The property to short the results by.
     */
    sort?: ReposListForAuthenticatedUserSortEnum;
    /**
     * Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
     */
    type?: ReposListForAuthenticatedUserTypeEnum;
    /**
     * Limit results to repositories with the specified visibility.
     */
    visibility?: ReposListForAuthenticatedUserVisibilityEnum;
}
export declare class ReposListForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    repositories?: shared.Repository[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
