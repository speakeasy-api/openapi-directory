import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationClientsSearchRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * The MAC address of the client. Required.
     */
    mac: string;
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 5. Default is 5.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
export declare class GetOrganizationClientsSearchResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationClientsSearch200ApplicationJSONObject?: Record<string, any>;
}
