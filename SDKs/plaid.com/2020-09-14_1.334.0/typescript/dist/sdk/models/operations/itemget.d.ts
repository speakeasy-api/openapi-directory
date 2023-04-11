import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    itemGetResponse?: Record<string, any>;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
