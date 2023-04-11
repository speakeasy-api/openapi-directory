import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UMPRNRequest extends SpeakeasyBase {
    apiKey?: string;
    filter?: string;
    /**
     * UMPRN to be retrieved
     */
    umprn: string;
}
export declare class UMPRNResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Resource not found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    umprnResponse?: shared.UMPRNResponse;
}
