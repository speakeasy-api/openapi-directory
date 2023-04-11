import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxTransferTestClockListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxTransferTestClockListResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
