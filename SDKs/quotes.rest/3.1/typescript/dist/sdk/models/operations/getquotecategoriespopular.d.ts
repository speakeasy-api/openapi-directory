import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteCategoriesPopularSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteCategoriesPopularRequest extends SpeakeasyBase {
    /**
     * Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.
     */
    limit?: number;
    /**
     * Response is paged. This parameter controls where response starts the listing at
     */
    start?: number;
}
export declare class GetQuoteCategoriesPopularResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
