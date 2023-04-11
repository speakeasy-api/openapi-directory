import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountsGetResponse extends SpeakeasyBase {
    /**
     * success
     */
    accountsGetResponse?: Record<string, any>;
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
