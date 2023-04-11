import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCellularGatewaySettingsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCellularGatewaySettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCellularGatewaySettings200ApplicationJSONObject?: Record<string, any>;
}
