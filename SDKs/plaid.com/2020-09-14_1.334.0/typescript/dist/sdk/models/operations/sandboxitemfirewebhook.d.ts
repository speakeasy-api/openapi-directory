import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxItemFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * success
     */
    sandboxItemFireWebhookResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
