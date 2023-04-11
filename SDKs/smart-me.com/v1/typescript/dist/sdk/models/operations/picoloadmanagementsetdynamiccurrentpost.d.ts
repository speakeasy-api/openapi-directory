import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PicoLoadmanagementSetDynamicCurrentPostRequest extends SpeakeasyBase {
    /**
     * The dynamic current of the group (in mA)
     */
    current: number;
    /**
     * The serial number can be any pico serial in the group (e.g. 700001)
     */
    serial: number;
}
export declare class PicoLoadmanagementSetDynamicCurrentPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
