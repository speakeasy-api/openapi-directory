import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteImageBackgroundSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteImageBackgroundSearchRequest extends SpeakeasyBase {
    /**
     * Tag string
     */
    query?: string;
}
export declare class GetQuoteImageBackgroundSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
