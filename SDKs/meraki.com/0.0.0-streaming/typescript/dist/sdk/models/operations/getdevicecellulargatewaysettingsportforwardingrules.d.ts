import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCellularGatewaySettingsPortForwardingRulesRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCellularGatewaySettingsPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCellularGatewaySettingsPortForwardingRules200ApplicationJSONObject?: Record<string, any>;
}
