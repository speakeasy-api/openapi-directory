import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetwork200ApplicationJSONObject?: Record<string, any>;
}
