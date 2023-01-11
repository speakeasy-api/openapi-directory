import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteImageFontListQueryParams extends SpeakeasyBase {
    start?: number;
}
export declare class GetQuoteImageFontListSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteImageFontListRequest extends SpeakeasyBase {
    queryParams: GetQuoteImageFontListQueryParams;
    security: GetQuoteImageFontListSecurity;
}
export declare class GetQuoteImageFontListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
