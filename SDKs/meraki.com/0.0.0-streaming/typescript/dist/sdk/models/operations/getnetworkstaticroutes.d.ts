import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkStaticRoutesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkStaticRoutesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkStaticRoutes200ApplicationJSONObjects?: Record<string, any>[];
}
