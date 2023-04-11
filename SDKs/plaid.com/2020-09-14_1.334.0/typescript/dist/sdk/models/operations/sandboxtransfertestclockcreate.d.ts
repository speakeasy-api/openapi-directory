import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxTransferTestClockCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxTransferTestClockCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
