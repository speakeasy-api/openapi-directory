import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VerifyCheckRequest extends SpeakeasyBase {
    checkRequest: shared.CheckRequest;
    /**
     * The response format.
     */
    format: shared.FormatEnum;
}
export declare class VerifyCheckResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyCheck200ApplicationJSONOneOf?: any;
}
