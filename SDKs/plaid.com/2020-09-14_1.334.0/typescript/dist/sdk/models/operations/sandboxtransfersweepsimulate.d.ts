import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxTransferSweepSimulateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxTransferSweepSimulateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
