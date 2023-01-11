import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteAuthorsSearchQueryParams extends SpeakeasyBase {
    detailed?: boolean;
    language?: string;
    limit?: number;
    query?: string;
    start?: number;
}
export declare class GetQuoteAuthorsSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteAuthorsSearchRequest extends SpeakeasyBase {
    queryParams: GetQuoteAuthorsSearchQueryParams;
    security: GetQuoteAuthorsSearchSecurity;
}
export declare class GetQuoteAuthorsSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
