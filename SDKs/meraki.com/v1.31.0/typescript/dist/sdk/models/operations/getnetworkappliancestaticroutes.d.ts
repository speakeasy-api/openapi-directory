import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceStaticRoutesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceStaticRoutesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceStaticRoutes200ApplicationJSONObjects?: Record<string, any>[];
}
