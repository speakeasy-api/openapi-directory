import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQodCategoriesQueryParams extends SpeakeasyBase {
    detailed?: boolean;
    language?: string;
}
export declare class GetQodCategoriesSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQodCategoriesRequest extends SpeakeasyBase {
    queryParams: GetQodCategoriesQueryParams;
    security: GetQodCategoriesSecurity;
}
export declare class GetQodCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
