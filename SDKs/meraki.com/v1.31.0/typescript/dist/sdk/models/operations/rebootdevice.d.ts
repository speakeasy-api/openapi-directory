import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RebootDeviceRequest extends SpeakeasyBase {
    serial: string;
}
export declare class RebootDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    rebootDevice202ApplicationJSONObject?: Record<string, any>;
}
