import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteImageBackgroundListQueryParams extends SpeakeasyBase {
    start?: number;
}
export declare class GetQuoteImageBackgroundListSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteImageBackgroundListRequest extends SpeakeasyBase {
    queryParams: GetQuoteImageBackgroundListQueryParams;
    security: GetQuoteImageBackgroundListSecurity;
}
export declare class GetQuoteImageBackgroundListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
