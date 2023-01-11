import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQshowQuotesQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class GetQshowQuotesSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQshowQuotesRequest extends SpeakeasyBase {
    queryParams: GetQshowQuotesQueryParams;
    security: GetQshowQuotesSecurity;
}
export declare class GetQshowQuotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
