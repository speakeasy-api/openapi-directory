import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteListQueryParams extends SpeakeasyBase {
    limit?: number;
    start?: number;
}
export declare class GetQuoteListSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteListRequest extends SpeakeasyBase {
    queryParams: GetQuoteListQueryParams;
    security: GetQuoteListSecurity;
}
export declare class GetQuoteListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
