import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteQuoteLikeQueryParams extends SpeakeasyBase {
    quoteId: string;
}
export declare class DeleteQuoteLikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class DeleteQuoteLikeRequest extends SpeakeasyBase {
    queryParams: DeleteQuoteLikeQueryParams;
    security: DeleteQuoteLikeSecurity;
}
export declare class DeleteQuoteLikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
