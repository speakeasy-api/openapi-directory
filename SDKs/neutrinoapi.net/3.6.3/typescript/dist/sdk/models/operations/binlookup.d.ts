import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BINLookupRequest extends SpeakeasyBase {
    /**
     * The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy
     */
    binNumber: string;
    /**
     * Pass in the customers IP address and we will return some extra information about them
     */
    customerIp?: string;
}
export declare class BINLookupResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    binLookupResponse?: shared.BINLookupResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
