import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceLldpCdpRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceLldpCdpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceLldpCdp200ApplicationJSONObject?: Record<string, any>;
}
