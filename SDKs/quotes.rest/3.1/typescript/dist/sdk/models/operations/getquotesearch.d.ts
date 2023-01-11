import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteSearchQueryParams extends SpeakeasyBase {
    author?: string;
    category?: string;
    language?: string;
    limit?: number;
    maxlength?: number;
    minlength?: number;
    private?: boolean;
    query?: string;
    sfw?: boolean;
}
export declare class GetQuoteSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteSearchRequest extends SpeakeasyBase {
    queryParams: GetQuoteSearchQueryParams;
    security: GetQuoteSearchSecurity;
}
export declare class GetQuoteSearchResponse extends SpeakeasyBase {
    contentType: string;
    quoteResponse?: any;
    statusCode: number;
}
