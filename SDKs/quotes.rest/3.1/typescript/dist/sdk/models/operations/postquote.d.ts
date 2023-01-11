import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteQueryParams extends SpeakeasyBase {
    author?: string;
    language?: string;
    quote: string;
    tags?: string;
}
export declare class PostQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteRequest extends SpeakeasyBase {
    queryParams: PostQuoteQueryParams;
    security: PostQuoteSecurity;
}
export declare class PostQuoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
