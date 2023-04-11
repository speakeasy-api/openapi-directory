import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessorSignalReturnReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    processorSignalReturnReportResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
