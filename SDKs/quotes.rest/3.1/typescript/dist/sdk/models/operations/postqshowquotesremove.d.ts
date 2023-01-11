import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQshowQuotesRemoveQueryParams extends SpeakeasyBase {
    id: string;
    quoteid: string;
}
export declare class PostQshowQuotesRemoveSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQshowQuotesRemoveRequest extends SpeakeasyBase {
    queryParams: PostQshowQuotesRemoveQueryParams;
    security: PostQshowQuotesRemoveSecurity;
}
export declare class PostQshowQuotesRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
