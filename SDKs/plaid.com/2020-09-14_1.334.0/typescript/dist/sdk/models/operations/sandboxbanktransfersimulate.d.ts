import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxBankTransferSimulateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxBankTransferSimulateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
