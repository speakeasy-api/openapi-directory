import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemApplicationListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    itemApplicationListResponse?: Record<string, any>;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
