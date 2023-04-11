import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HLRLookupRequest extends SpeakeasyBase {
    /**
     * ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)
     */
    countryCode?: string;
    /**
     * A phone number
     */
    number: string;
}
export declare class HLRLookupResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    hlrLookupResponse?: shared.HLRLookupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
