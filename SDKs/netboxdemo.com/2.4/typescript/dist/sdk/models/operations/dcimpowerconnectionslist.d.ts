import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerConnectionsListRequest extends SpeakeasyBase {
    connectionStatus?: string;
    device?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    site?: string;
}
export declare class DcimPowerConnectionsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerPort[];
}
export declare class DcimPowerConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimPowerConnectionsList200ApplicationJSONObject?: DcimPowerConnectionsList200ApplicationJSON;
}
