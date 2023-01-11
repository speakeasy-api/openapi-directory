import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchQuoteQueryParams extends SpeakeasyBase {
    author?: string;
    id: string;
    language?: string;
    quote?: string;
    tags?: string;
}
export declare class PatchQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PatchQuoteRequest extends SpeakeasyBase {
    queryParams: PatchQuoteQueryParams;
    security: PatchQuoteSecurity;
}
export declare class PatchQuoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
