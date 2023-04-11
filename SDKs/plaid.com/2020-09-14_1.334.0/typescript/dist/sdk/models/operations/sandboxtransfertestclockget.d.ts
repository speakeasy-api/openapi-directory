import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxTransferTestClockGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxTransferTestClockGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
