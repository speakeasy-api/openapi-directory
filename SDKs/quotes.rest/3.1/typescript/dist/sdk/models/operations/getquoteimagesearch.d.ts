import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteImageSearchQueryParams extends SpeakeasyBase {
    author?: string;
    category?: string;
    private?: boolean;
}
export declare class GetQuoteImageSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteImageSearchRequest extends SpeakeasyBase {
    queryParams: GetQuoteImageSearchQueryParams;
    security: GetQuoteImageSearchSecurity;
}
export declare class GetQuoteImageSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
