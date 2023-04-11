import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFirewalledServicesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkFirewalledServicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFirewalledServices200ApplicationJSONObjects?: Record<string, any>[];
}
