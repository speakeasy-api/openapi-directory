import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceTypesListRequest extends SpeakeasyBase {
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    isConsoleServer?: string;
    isFullDepth?: string;
    isNetworkDevice?: string;
    isPdu?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    manufacturer?: string;
    manufacturerId?: string;
    model?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    partNumber?: string;
    q?: string;
    slug?: string;
    subdeviceRole?: string;
    tag?: string;
    uHeight?: number;
}
export declare class DcimDeviceTypesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceType[];
}
export declare class DcimDeviceTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimDeviceTypesList200ApplicationJSONObject?: DcimDeviceTypesList200ApplicationJSON;
}
