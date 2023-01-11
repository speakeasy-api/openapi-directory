import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutQuoteLikeQueryParams extends SpeakeasyBase {
    quoteId: string;
}
export declare class PutQuoteLikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PutQuoteLikeRequest extends SpeakeasyBase {
    queryParams: PutQuoteLikeQueryParams;
    security: PutQuoteLikeSecurity;
}
export declare class PutQuoteLikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
