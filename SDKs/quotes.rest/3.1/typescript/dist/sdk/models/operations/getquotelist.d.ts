import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteListSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteListRequest extends SpeakeasyBase {
    /**
     * Response is paged. This parameter controls how many is returned in the result.
     */
    limit?: number;
    /**
     * Response is paged. This parameter controls where response starts the listing at
     */
    start?: number;
}
export declare class GetQuoteListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
