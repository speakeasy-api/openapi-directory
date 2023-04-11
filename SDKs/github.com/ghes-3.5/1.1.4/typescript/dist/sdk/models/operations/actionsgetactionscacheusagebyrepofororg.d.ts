import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetActionsCacheUsageByRepoForOrgRequest extends SpeakeasyBase {
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
}
/**
 * Response
 */
export declare class ActionsGetActionsCacheUsageByRepoForOrg200ApplicationJSON extends SpeakeasyBase {
    repositoryCacheUsages: shared.ActionsCacheUsageByRepository[];
    totalCount: number;
}
export declare class ActionsGetActionsCacheUsageByRepoForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsGetActionsCacheUsageByRepoForOrg200ApplicationJSONObject?: ActionsGetActionsCacheUsageByRepoForOrg200ApplicationJSON;
}
