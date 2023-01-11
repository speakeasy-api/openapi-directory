import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteDislikeQueryParams extends SpeakeasyBase {
    quoteId: string;
}
export declare class PostQuoteDislikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteDislikeRequest extends SpeakeasyBase {
    queryParams: PostQuoteDislikeQueryParams;
    security: PostQuoteDislikeSecurity;
}
export declare class PostQuoteDislikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
