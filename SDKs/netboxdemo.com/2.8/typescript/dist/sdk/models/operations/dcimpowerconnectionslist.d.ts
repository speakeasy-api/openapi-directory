import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerConnectionsListRequest extends SpeakeasyBase {
    connectionStatus?: string;
    connectionStatusN?: string;
    device?: string;
    deviceId?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
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
