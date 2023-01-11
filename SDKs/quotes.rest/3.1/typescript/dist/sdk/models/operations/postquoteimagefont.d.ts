import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteImageFontRequestBodyFont extends SpeakeasyBase {
    content: Uint8Array;
    font: string;
}
export declare class PostQuoteImageFontRequestBody extends SpeakeasyBase {
    font: PostQuoteImageFontRequestBodyFont;
    tags?: string;
}
export declare class PostQuoteImageFontSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteImageFontRequest extends SpeakeasyBase {
    request?: PostQuoteImageFontRequestBody;
    security: PostQuoteImageFontSecurity;
}
export declare class PostQuoteImageFontResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
