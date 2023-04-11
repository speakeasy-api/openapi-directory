import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelfHostedRunnersForRepoRequest extends SpeakeasyBase {
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
}
/**
 * Response
 */
export declare class ActionsListSelfHostedRunnersForRepo200ApplicationJSON extends SpeakeasyBase {
    runners: shared.Runner[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnersForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelfHostedRunnersForRepo200ApplicationJSONObject?: ActionsListSelfHostedRunnersForRepo200ApplicationJSON;
}
