import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteImageFontListSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteImageFontListRequest extends SpeakeasyBase {
    /**
     * Response is paged. This parameter determines where the response should start.
     */
    start?: number;
}
export declare class GetQuoteImageFontListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
