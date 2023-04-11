import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VerifyRequestRequest extends SpeakeasyBase {
    /**
     * The response format.
     */
    format: shared.FormatEnum;
    verifyRequest: shared.VerifyRequest;
}
export declare class VerifyRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyRequest200ApplicationJSONOneOf?: any;
}
