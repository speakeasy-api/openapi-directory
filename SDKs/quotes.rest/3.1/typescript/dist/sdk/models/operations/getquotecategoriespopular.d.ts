import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteCategoriesPopularQueryParams extends SpeakeasyBase {
    limit?: number;
    start?: number;
}
export declare class GetQuoteCategoriesPopularSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteCategoriesPopularRequest extends SpeakeasyBase {
    queryParams: GetQuoteCategoriesPopularQueryParams;
    security: GetQuoteCategoriesPopularSecurity;
}
export declare class GetQuoteCategoriesPopularResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
