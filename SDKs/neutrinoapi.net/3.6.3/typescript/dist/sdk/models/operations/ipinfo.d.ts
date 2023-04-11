import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IPInfoRequest extends SpeakeasyBase {
    /**
     * IPv4 or IPv6 address
     */
    ip: string;
    /**
     * Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it
     */
    reverseLookup?: boolean;
}
export declare class IPInfoResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    ipInfoResponse?: shared.IPInfoResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
