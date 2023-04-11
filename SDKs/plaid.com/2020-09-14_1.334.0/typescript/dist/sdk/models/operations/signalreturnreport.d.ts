import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SignalReturnReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    signalReturnReportResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
