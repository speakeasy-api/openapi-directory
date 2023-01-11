import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteCategoriesSearchQueryParams extends SpeakeasyBase {
    limit?: number;
    query?: string;
    start?: number;
}
export declare class GetQuoteCategoriesSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteCategoriesSearchRequest extends SpeakeasyBase {
    queryParams: GetQuoteCategoriesSearchQueryParams;
    security: GetQuoteCategoriesSearchSecurity;
}
export declare class GetQuoteCategoriesSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
