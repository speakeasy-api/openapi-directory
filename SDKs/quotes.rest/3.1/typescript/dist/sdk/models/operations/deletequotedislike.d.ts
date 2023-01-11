import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteQuoteDislikeQueryParams extends SpeakeasyBase {
    quoteId: string;
}
export declare class DeleteQuoteDislikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class DeleteQuoteDislikeRequest extends SpeakeasyBase {
    queryParams: DeleteQuoteDislikeQueryParams;
    security: DeleteQuoteDislikeSecurity;
}
export declare class DeleteQuoteDislikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
