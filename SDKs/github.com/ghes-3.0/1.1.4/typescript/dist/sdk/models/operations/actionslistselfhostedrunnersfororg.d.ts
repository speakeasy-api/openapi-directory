import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelfHostedRunnersForOrgRequest extends SpeakeasyBase {
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
/**
 * Response
 */
export declare class ActionsListSelfHostedRunnersForOrg200ApplicationJSON extends SpeakeasyBase {
    runners: shared.Runner[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnersForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelfHostedRunnersForOrg200ApplicationJSONObject?: ActionsListSelfHostedRunnersForOrg200ApplicationJSON;
}
