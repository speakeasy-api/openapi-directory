import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelectedReposForOrgSecretRequest extends SpeakeasyBase {
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
     * secret_name parameter
     */
    secretName: string;
}
/**
 * Response
 */
export declare class ActionsListSelectedReposForOrgSecret200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.MinimalRepository[];
    totalCount: number;
}
export declare class ActionsListSelectedReposForOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelectedReposForOrgSecret200ApplicationJSONObject?: ActionsListSelectedReposForOrgSecret200ApplicationJSON;
}
