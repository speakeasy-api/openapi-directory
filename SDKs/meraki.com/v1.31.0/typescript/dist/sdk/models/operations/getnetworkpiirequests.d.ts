import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkPiiRequestsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkPiiRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkPiiRequests200ApplicationJSONObjects?: Record<string, any>[];
}
