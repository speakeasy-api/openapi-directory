import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DevicesPutRequest extends SpeakeasyBase {
    /**
     * The ID of the device
     */
    id: string;
    /**
     * The number of the switch if there are multiple (1 for L1, 3 for L3)
     */
    switchNumber?: number;
    /**
     * The new state of the switch
     */
    switchState: boolean;
}
export declare class DevicesPutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
