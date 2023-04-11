import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteImageBackgroundListSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteImageBackgroundListRequest extends SpeakeasyBase {
    /**
     * Response is paged. This parameter determines where the response should start.
     */
    start?: number;
}
export declare class GetQuoteImageBackgroundListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
