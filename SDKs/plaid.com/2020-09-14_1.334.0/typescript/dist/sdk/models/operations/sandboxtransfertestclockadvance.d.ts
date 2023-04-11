import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxTransferTestClockAdvanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxTransferTestClockAdvanceResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
