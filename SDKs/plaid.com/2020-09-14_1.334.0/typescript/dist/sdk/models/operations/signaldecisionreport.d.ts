import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SignalDecisionReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    signalDecisionReportResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
