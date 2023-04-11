import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessorSignalDecisionReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    processorSignalDecisionReportResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
