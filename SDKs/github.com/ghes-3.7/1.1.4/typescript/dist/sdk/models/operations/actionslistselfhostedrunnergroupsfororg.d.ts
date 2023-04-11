import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelfHostedRunnerGroupsForOrgRequest extends SpeakeasyBase {
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
     * Only return runner groups that are allowed to be used by this repository.
     */
    visibleToRepository?: string;
}
/**
 * Response
 */
export declare class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON extends SpeakeasyBase {
    runnerGroups: shared.RunnerGroupsOrg[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnerGroupsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject?: ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON;
}
