import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCellularGatewayLanRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCellularGatewayLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCellularGatewayLan200ApplicationJSONObject?: Record<string, any>;
}
