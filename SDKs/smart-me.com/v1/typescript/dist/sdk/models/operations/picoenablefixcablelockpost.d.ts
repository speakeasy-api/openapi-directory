import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PicoEnableFixCableLockPostRequest extends SpeakeasyBase {
    /**
     * The ID of the pico
     */
    id: string;
}
export declare class PicoEnableFixCableLockPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
