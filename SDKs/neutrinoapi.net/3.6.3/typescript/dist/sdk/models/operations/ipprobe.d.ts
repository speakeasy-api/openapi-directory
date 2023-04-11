import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IPProbeRequest extends SpeakeasyBase {
    /**
     * IPv4 or IPv6 address
     */
    ip: string;
}
export declare class IPProbeResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    ipProbeResponse?: shared.IPProbeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
