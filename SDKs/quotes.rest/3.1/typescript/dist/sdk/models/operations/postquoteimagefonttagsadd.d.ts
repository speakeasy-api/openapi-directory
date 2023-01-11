import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteImageFontTagsAddQueryParams extends SpeakeasyBase {
    id: string;
    tags: string;
}
export declare class PostQuoteImageFontTagsAddSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteImageFontTagsAddRequest extends SpeakeasyBase {
    queryParams: PostQuoteImageFontTagsAddQueryParams;
    security: PostQuoteImageFontTagsAddSecurity;
}
export declare class PostQuoteImageFontTagsAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
