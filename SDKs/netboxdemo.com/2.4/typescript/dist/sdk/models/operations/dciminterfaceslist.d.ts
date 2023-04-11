import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInterfacesListRequest extends SpeakeasyBase {
    device?: string;
    deviceId?: number;
    enabled?: string;
    formFactor?: string;
    lagId?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    macAddress?: string;
    mgmtOnly?: string;
    mtu?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    tag?: string;
    type?: string;
    vlan?: string;
    vlanId?: string;
}
export declare class DcimInterfacesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Interface[];
}
export declare class DcimInterfacesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimInterfacesList200ApplicationJSONObject?: DcimInterfacesList200ApplicationJSON;
}
