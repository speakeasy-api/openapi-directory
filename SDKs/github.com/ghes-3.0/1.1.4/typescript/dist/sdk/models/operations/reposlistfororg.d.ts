import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be one of `asc` or `desc`. Default: when using `full_name`: `asc`, otherwise `desc`
 */
export declare enum ReposListForOrgDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Can be one of `created`, `updated`, `pushed`, `full_name`.
 */
export declare enum ReposListForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
/**
 * Specifies the types of repositories you want returned. Can be one of `all`, `public`, `private`, `forks`, `sources`, `member`, `internal`. Note: For GitHub AE, can be one of `all`, `private`, `forks`, `sources`, `member`, `internal`. Default: `all`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `type` can also be `internal`. However, the `internal` value is not yet supported when a GitHub App calls this API with an installation access token.
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
     * Can be one of `asc` or `desc`. Default: when using `full_name`: `asc`, otherwise `desc`
     */
    direction?: ReposListForOrgDirectionEnum;
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * Can be one of `created`, `updated`, `pushed`, `full_name`.
     */
    sort?: ReposListForOrgSortEnum;
    /**
     * Specifies the types of repositories you want returned. Can be one of `all`, `public`, `private`, `forks`, `sources`, `member`, `internal`. Note: For GitHub AE, can be one of `all`, `private`, `forks`, `sources`, `member`, `internal`. Default: `all`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `type` can also be `internal`. However, the `internal` value is not yet supported when a GitHub App calls this API with an installation access token.
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
