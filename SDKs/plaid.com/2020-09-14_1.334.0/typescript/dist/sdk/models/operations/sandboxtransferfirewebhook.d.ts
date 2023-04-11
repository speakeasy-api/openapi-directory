import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxTransferFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxTransferFireWebhookResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
