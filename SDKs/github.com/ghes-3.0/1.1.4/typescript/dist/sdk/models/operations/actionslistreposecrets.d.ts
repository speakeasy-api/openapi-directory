import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListRepoSecretsRequest extends SpeakeasyBase {
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
}
/**
 * Response
 */
export declare class ActionsListRepoSecrets200ApplicationJSON extends SpeakeasyBase {
    secrets: shared.ActionsSecret[];
    totalCount: number;
}
export declare class ActionsListRepoSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListRepoSecrets200ApplicationJSONObject?: ActionsListRepoSecrets200ApplicationJSON;
}
