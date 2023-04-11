import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamServicesListRequest extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    port?: number;
    protocol?: string;
    q?: string;
    tag?: string;
    virtualMachine?: string;
    virtualMachineId?: string;
}
export declare class IpamServicesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Service[];
}
export declare class IpamServicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    ipamServicesList200ApplicationJSONObject?: IpamServicesList200ApplicationJSON;
}
