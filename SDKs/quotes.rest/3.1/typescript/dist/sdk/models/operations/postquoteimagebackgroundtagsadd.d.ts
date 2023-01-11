import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteImageBackgroundTagsAddQueryParams extends SpeakeasyBase {
    id: string;
    tags: string;
}
export declare class PostQuoteImageBackgroundTagsAddSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteImageBackgroundTagsAddRequest extends SpeakeasyBase {
    queryParams: PostQuoteImageBackgroundTagsAddQueryParams;
    security: PostQuoteImageBackgroundTagsAddSecurity;
}
export declare class PostQuoteImageBackgroundTagsAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
