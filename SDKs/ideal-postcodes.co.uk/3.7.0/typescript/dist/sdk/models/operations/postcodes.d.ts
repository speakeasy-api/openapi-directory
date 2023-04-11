import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostcodesRequest extends SpeakeasyBase {
    apiKey?: string;
    filter?: string;
    page?: number;
    /**
     * Postcode to retrieve
     */
    postcode: string;
}
export declare class PostcodesResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Postcode Not Found
     */
    postcodeNotFoundResponse?: shared.PostcodeNotFoundResponse;
    /**
     * Success
     */
    postcodeResponse?: shared.PostcodeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
