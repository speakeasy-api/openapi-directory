import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteCategoriesSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteCategoriesSearchRequest extends SpeakeasyBase {
    /**
     * Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.
     */
    limit?: number;
    /**
     * Text string to search for in the categories
     */
    query?: string;
    /**
     * Response is paged. This parameter controls where response starts the listing at
     */
    start?: number;
}
export declare class GetQuoteCategoriesSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
