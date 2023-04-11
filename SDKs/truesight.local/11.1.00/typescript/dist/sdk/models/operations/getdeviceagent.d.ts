import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceAgentRequest extends SpeakeasyBase {
    /**
     * The ID of the device.
     */
    deviceId: number;
}
export declare class GetDeviceAgentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
