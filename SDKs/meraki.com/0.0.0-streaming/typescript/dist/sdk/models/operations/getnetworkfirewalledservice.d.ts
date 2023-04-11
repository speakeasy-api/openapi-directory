import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkFirewalledServiceRequest extends SpeakeasyBase {
    networkId: string;
    service: string;
}
export declare class GetNetworkFirewalledServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkFirewalledService200ApplicationJSONObject?: Record<string, any>;
}
