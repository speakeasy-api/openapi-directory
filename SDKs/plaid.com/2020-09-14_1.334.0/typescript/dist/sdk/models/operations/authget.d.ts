import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AuthGetResponse extends SpeakeasyBase {
    /**
     * success
     */
    authGetResponse?: Record<string, any>;
    contentType: string;
    /**
     * Default error
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
