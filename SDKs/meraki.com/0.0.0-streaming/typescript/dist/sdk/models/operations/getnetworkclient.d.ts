import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkClientRequest extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkClient200ApplicationJSONObject?: Record<string, any>;
}
