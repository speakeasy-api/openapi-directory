import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RediscoverRequest extends SpeakeasyBase {
    /**
     * The ID of the device.
     */
    deviceId: number;
}
export declare class RediscoverResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
