import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationInterfacesListRequest extends SpeakeasyBase {
    enabled?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    macAddress?: string;
    mtu?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    virtualMachine?: string;
    virtualMachineId?: string;
}
export declare class VirtualizationInterfacesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Interface[];
}
export declare class VirtualizationInterfacesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualizationInterfacesList200ApplicationJSONObject?: VirtualizationInterfacesList200ApplicationJSON;
}
