import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DependabotListOrgSecretsRequest extends SpeakeasyBase {
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
export declare class DependabotListOrgSecrets200ApplicationJSON extends SpeakeasyBase {
    secrets: shared.OrganizationDependabotSecret[];
    totalCount: number;
}
export declare class DependabotListOrgSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    dependabotListOrgSecrets200ApplicationJSONObject?: DependabotListOrgSecrets200ApplicationJSON;
}
