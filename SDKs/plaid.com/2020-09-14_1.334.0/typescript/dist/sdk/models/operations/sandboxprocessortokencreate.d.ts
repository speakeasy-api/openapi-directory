import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxProcessorTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxProcessorTokenCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
