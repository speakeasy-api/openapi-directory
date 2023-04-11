import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceAppliancePrefixesDelegatedRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceAppliancePrefixesDelegatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceAppliancePrefixesDelegated200ApplicationJSONObjects?: Record<string, any>[];
}
