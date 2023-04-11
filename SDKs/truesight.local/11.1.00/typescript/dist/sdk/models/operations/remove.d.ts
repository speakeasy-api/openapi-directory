import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveRequest extends SpeakeasyBase {
    /**
     * The ID of the device.
     */
    deviceId: number;
    /**
     * The Monitor Class of the device.
     */
    monitorClass: string;
    /**
     * The Monitor SID of the device.
     */
    monitorSid: string;
}
export declare class RemoveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
