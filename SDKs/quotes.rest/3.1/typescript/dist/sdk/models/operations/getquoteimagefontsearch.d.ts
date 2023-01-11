import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteImageFontSearchQueryParams extends SpeakeasyBase {
    query?: string;
}
export declare class GetQuoteImageFontSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteImageFontSearchRequest extends SpeakeasyBase {
    queryParams: GetQuoteImageFontSearchQueryParams;
    security: GetQuoteImageFontSearchSecurity;
}
export declare class GetQuoteImageFontSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
