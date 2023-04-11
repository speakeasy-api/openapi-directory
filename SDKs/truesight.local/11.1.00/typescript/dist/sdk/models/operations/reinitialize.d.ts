import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReinitializeRequest extends SpeakeasyBase {
    /**
     * The request body as a JSON payload.
     */
    reinitializeActionConfiguration: shared.ReinitializeActionConfiguration;
    /**
     * The ID of the device.
     */
    deviceId: number;
}
export declare class ReinitializeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
