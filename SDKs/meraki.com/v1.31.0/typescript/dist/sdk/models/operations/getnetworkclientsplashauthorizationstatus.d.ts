import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkClientSplashAuthorizationStatusRequest extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientSplashAuthorizationStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject?: Record<string, any>;
}
