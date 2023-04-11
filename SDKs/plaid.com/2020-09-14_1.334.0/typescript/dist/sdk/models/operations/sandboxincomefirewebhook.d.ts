import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxIncomeFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxIncomeFireWebhookResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
