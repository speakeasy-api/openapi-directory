import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceParameterHistoryRequest extends SpeakeasyBase {
    /**
     * The ID of the device.
     */
    deviceId: number;
    /**
     * Beginning of the period (Epoch time, in seconds).
     */
    from?: number;
    /**
     * The Monitor SID (to filter the list of Monitors).
     */
    monitorSid?: string;
    /**
     * The unique name of the Monitor type.
     */
    monitorType: string;
    /**
     * The name of the parameter.
     */
    parameterName: string;
    /**
     * End of the period (Epoch time, in seconds).
     */
    to?: number;
}
export declare class GetDeviceParameterHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
