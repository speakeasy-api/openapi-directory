import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteImageFontTagsRemoveQueryParams extends SpeakeasyBase {
    id: string;
    tags: string;
}
export declare class PostQuoteImageFontTagsRemoveSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteImageFontTagsRemoveRequest extends SpeakeasyBase {
    queryParams: PostQuoteImageFontTagsRemoveQueryParams;
    security: PostQuoteImageFontTagsRemoveSecurity;
}
export declare class PostQuoteImageFontTagsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
