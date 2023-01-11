import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteLikeQueryParams extends SpeakeasyBase {
    quoteId: string;
}
export declare class PostQuoteLikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteLikeRequest extends SpeakeasyBase {
    queryParams: PostQuoteLikeQueryParams;
    security: PostQuoteLikeSecurity;
}
export declare class PostQuoteLikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
