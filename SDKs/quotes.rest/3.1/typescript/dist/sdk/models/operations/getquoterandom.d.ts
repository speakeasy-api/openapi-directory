import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteRandomQueryParams extends SpeakeasyBase {
    language?: string;
    limit?: number;
}
export declare class GetQuoteRandomSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteRandomRequest extends SpeakeasyBase {
    queryParams: GetQuoteRandomQueryParams;
    security: GetQuoteRandomSecurity;
}
export declare class GetQuoteRandomResponse extends SpeakeasyBase {
    contentType: string;
    quoteResponse?: any;
    statusCode: number;
}
