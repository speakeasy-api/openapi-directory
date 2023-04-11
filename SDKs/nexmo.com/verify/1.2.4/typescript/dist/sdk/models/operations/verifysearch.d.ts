import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VerifySearchRequest extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    /**
     * The response format.
     */
    format: shared.FormatEnum;
    /**
     * The `request_id` you received in the Verify Request Response. Required if `request_ids` not provided.
     */
    requestId: string;
    /**
     * More than one `request_id`. Each `request_id` is a new parameter in the Verify Search request. Required if `request_id` not provided.
     */
    requestIds?: string[];
}
export declare class VerifySearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifySearch200ApplicationJSONOneOf?: any;
}
