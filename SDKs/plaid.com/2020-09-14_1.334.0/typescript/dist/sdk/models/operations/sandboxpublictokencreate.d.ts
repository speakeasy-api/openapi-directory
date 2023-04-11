import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxPublicTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * success
     */
    sandboxPublicTokenCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
