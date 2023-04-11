import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VerifyControlRequest extends SpeakeasyBase {
    controlRequest: shared.ControlRequest;
    /**
     * The response format.
     */
    format: shared.FormatEnum;
}
export declare class VerifyControlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyControl200ApplicationJSONOneOf?: any;
}
