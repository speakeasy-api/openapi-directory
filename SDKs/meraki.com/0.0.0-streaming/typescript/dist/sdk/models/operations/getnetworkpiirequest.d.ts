import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkPiiRequestRequest extends SpeakeasyBase {
    networkId: string;
    requestId: string;
}
export declare class GetNetworkPiiRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkPiiRequest200ApplicationJSONObject?: Record<string, any>;
}
