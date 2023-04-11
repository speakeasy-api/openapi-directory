import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceSecurityIntrusionRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceSecurityIntrusionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceSecurityIntrusion200ApplicationJSONObject?: Record<string, any>;
}
