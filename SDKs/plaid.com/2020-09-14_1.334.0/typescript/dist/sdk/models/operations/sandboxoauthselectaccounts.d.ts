import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxOauthSelectAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    /**
     * OK
     */
    sandboxOauthSelectAccountsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
