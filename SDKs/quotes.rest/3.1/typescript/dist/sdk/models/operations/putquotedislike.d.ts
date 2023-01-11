import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutQuoteDislikeQueryParams extends SpeakeasyBase {
    quoteId: string;
}
export declare class PutQuoteDislikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PutQuoteDislikeRequest extends SpeakeasyBase {
    queryParams: PutQuoteDislikeQueryParams;
    security: PutQuoteDislikeSecurity;
}
export declare class PutQuoteDislikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
