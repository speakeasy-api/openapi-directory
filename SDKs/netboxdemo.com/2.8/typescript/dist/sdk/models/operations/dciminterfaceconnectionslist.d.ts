import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInterfaceConnectionsListRequest extends SpeakeasyBase {
    connectionStatus?: string;
    connectionStatusN?: string;
    device?: string;
    deviceId?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    site?: string;
}
export declare class DcimInterfaceConnectionsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.InterfaceConnection[];
}
export declare class DcimInterfaceConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimInterfaceConnectionsList200ApplicationJSONObject?: DcimInterfaceConnectionsList200ApplicationJSON;
}
