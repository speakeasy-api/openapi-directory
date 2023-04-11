import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxBankTransferFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxBankTransferFireWebhookResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
