import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BlinkDeviceLedsRequestBody extends SpeakeasyBase {
    /**
     * The duration in seconds. Must be between 5 and 120. Default is 20 seconds
     */
    duration?: number;
    /**
     * The duty cycle as the percent active. Must be between 10 and 90. Default is 50.
     */
    duty?: number;
    /**
     * The period in milliseconds. Must be between 100 and 1000. Default is 160 milliseconds
     */
    period?: number;
}
export declare class BlinkDeviceLedsRequest extends SpeakeasyBase {
    requestBody?: BlinkDeviceLedsRequestBody;
    serial: string;
}
export declare class BlinkDeviceLedsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    blinkDeviceLeds202ApplicationJSONObject?: Record<string, any>;
}
