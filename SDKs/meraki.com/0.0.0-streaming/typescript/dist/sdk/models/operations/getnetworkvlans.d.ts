import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkVlansRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkVlansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkVlans200ApplicationJSONObjects?: Record<string, any>[];
}
