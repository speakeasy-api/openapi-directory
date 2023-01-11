import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutQuoteQueryParams extends SpeakeasyBase {
    author?: string;
    language?: string;
    quote: string;
    tags?: string;
}
export declare class PutQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PutQuoteRequest extends SpeakeasyBase {
    queryParams: PutQuoteQueryParams;
    security: PutQuoteSecurity;
}
export declare class PutQuoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
