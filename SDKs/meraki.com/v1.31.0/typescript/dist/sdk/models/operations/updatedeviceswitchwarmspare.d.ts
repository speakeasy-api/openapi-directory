import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceSwitchWarmSpareRequestBody extends SpeakeasyBase {
    /**
     * Enable or disable warm spare for a switch
     */
    enabled: boolean;
    /**
     * Serial number of the warm spare switch
     */
    spareSerial?: string;
}
export declare class UpdateDeviceSwitchWarmSpareRequest extends SpeakeasyBase {
    requestBody: UpdateDeviceSwitchWarmSpareRequestBody;
    serial: string;
}
export declare class UpdateDeviceSwitchWarmSpareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceSwitchWarmSpare200ApplicationJSONObject?: Record<string, any>;
}
