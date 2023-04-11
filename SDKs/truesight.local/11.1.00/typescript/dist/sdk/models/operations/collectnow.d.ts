import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CollectNowRequest extends SpeakeasyBase {
    /**
     * The ID of the device.
     */
    deviceId: number;
    /**
     * The Monitor Class of the device.
     */
    monitorClass: string;
}
export declare class CollectNowResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
