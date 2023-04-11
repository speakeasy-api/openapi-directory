import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteImageFontSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteImageFontSearchRequest extends SpeakeasyBase {
    /**
     * Tag string
     */
    query?: string;
}
export declare class GetQuoteImageFontSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
