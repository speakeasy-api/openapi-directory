import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteImageBackgroundSearchQueryParams extends SpeakeasyBase {
    query?: string;
}
export declare class GetQuoteImageBackgroundSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteImageBackgroundSearchRequest extends SpeakeasyBase {
    queryParams: GetQuoteImageBackgroundSearchQueryParams;
    security: GetQuoteImageBackgroundSearchSecurity;
}
export declare class GetQuoteImageBackgroundSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
