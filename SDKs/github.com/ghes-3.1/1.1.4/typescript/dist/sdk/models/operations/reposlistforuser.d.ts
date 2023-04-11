import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
 */
export declare enum ReposListForUserDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The property to sort the results by.
 */
export declare enum ReposListForUserSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
/**
 * Limit results to repositories of the specified type.
 */
export declare enum ReposListForUserTypeEnum {
    All = "all",
    Owner = "owner",
    Member = "member"
}
export declare class ReposListForUserRequest extends SpeakeasyBase {
    /**
     * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
     */
    direction?: ReposListForUserDirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The property to sort the results by.
     */
    sort?: ReposListForUserSortEnum;
    /**
     * Limit results to repositories of the specified type.
     */
    type?: ReposListForUserTypeEnum;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class ReposListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    minimalRepositories?: shared.MinimalRepository[];
}
