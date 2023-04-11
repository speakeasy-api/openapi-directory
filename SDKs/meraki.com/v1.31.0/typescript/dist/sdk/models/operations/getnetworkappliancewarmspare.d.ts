import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceWarmSpare200ApplicationJSONObject?: Record<string, any>;
}
