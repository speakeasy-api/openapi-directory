import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxTransferRepaymentSimulateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxTransferRepaymentSimulateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
