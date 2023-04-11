import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSwitchRoutingStaticRoutesRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceSwitchRoutingStaticRoutesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObjects?: Record<string, any>[];
}
