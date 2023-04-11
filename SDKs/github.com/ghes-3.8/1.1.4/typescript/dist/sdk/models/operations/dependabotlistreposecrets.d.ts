import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DependabotListRepoSecretsRequest extends SpeakeasyBase {
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
export declare class DependabotListRepoSecrets200ApplicationJSON extends SpeakeasyBase {
    secrets: shared.DependabotSecret[];
    totalCount: number;
}
export declare class DependabotListRepoSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    dependabotListRepoSecrets200ApplicationJSONObject?: DependabotListRepoSecrets200ApplicationJSON;
}
