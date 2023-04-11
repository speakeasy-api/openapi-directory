import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessorSignalEvaluateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    processorSignalEvaluateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
