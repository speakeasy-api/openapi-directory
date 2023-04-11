import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
 */
export declare enum ReposListForOrgDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The property to sort the results by.
 */
export declare enum ReposListForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
/**
 * Specifies the types of repositories you want returned. `internal` is not yet supported when a GitHub App calls this endpoint with an installation access token.
 */
export declare enum ReposListForOrgTypeEnum {
    All = "all",
    Public = "public",
    Private = "private",
    Forks = "forks",
    Sources = "sources",
    Member = "member",
    Internal = "internal"
}
export declare class ReposListForOrgRequest extends SpeakeasyBase {
    /**
     * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
     */
    direction?: ReposListForOrgDirectionEnum;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
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
    sort?: ReposListForOrgSortEnum;
    /**
     * Specifies the types of repositories you want returned. `internal` is not yet supported when a GitHub App calls this endpoint with an installation access token.
     */
    type?: ReposListForOrgTypeEnum;
}
export declare class ReposListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    minimalRepositories?: shared.MinimalRepository[];
}
