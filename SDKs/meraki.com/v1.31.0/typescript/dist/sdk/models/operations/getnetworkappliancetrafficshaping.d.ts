import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceTrafficShapingRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceTrafficShapingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceTrafficShaping200ApplicationJSONObject?: Record<string, any>;
}
