import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteQueryParams extends SpeakeasyBase {
    id?: string;
}
export declare class GetQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteRequest extends SpeakeasyBase {
    queryParams: GetQuoteQueryParams;
    security: GetQuoteSecurity;
}
export declare class GetQuoteResponse extends SpeakeasyBase {
    contentType: string;
    quoteResponse?: any;
    statusCode: number;
}
