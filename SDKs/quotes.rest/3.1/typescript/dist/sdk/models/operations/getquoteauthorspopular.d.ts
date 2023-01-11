import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteAuthorsPopularQueryParams extends SpeakeasyBase {
    detailed?: boolean;
    language?: string;
    limit?: number;
    start?: number;
}
export declare class GetQuoteAuthorsPopularSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteAuthorsPopularRequest extends SpeakeasyBase {
    queryParams: GetQuoteAuthorsPopularQueryParams;
    security: GetQuoteAuthorsPopularSecurity;
}
export declare class GetQuoteAuthorsPopularResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
