import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemActivityListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    itemActivityListResponse?: Record<string, any>;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
