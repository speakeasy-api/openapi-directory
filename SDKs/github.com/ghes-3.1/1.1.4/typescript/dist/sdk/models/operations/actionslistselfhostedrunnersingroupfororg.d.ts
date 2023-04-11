import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelfHostedRunnersInGroupForOrgRequest extends SpeakeasyBase {
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
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
/**
 * Response
 */
export declare class ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON extends SpeakeasyBase {
    runners: shared.Runner[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnersInGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject?: ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON;
}
