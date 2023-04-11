import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListOrgSecretsRequest extends SpeakeasyBase {
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
export declare class ActionsListOrgSecrets200ApplicationJSON extends SpeakeasyBase {
    secrets: shared.OrganizationActionsSecret[];
    totalCount: number;
}
export declare class ActionsListOrgSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListOrgSecrets200ApplicationJSONObject?: ActionsListOrgSecrets200ApplicationJSON;
}
