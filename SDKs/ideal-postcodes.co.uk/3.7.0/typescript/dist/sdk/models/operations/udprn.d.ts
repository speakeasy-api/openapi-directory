import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UDPRNRequest extends SpeakeasyBase {
    apiKey?: string;
    filter?: string;
    /**
     * UDPRN to be retrieved
     */
    udprn: string;
}
export declare class UDPRNResponse extends SpeakeasyBase {
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
    udprnResponse?: shared.UDPRNResponse;
}
