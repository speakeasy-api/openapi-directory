import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemApplicationScopesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    itemApplicationScopesUpdateResponse?: Record<string, any>;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
