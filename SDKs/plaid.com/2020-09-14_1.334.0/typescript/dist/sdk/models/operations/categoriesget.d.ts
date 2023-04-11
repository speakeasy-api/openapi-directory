import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CategoriesGetResponse extends SpeakeasyBase {
    /**
     * success
     */
    categoriesGetResponse?: Record<string, any>;
    contentType: string;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
