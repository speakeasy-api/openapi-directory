import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCellularGatewayPortForwardingRulesRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCellularGatewayPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject?: Record<string, any>;
}
