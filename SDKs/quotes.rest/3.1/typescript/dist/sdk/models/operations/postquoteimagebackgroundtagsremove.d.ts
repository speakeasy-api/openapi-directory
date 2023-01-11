import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteImageBackgroundTagsRemoveQueryParams extends SpeakeasyBase {
    id: string;
    tags: string;
}
export declare class PostQuoteImageBackgroundTagsRemoveSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteImageBackgroundTagsRemoveRequest extends SpeakeasyBase {
    queryParams: PostQuoteImageBackgroundTagsRemoveQueryParams;
    security: PostQuoteImageBackgroundTagsRemoveSecurity;
}
export declare class PostQuoteImageBackgroundTagsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
