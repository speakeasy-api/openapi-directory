import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteImageBackgroundRequestBodyImage extends SpeakeasyBase {
    content: Uint8Array;
    image: string;
}
export declare class PostQuoteImageBackgroundRequestBody extends SpeakeasyBase {
    image: PostQuoteImageBackgroundRequestBodyImage;
    tags?: string;
}
export declare class PostQuoteImageBackgroundSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteImageBackgroundRequest extends SpeakeasyBase {
    request?: PostQuoteImageBackgroundRequestBody;
    security: PostQuoteImageBackgroundSecurity;
}
export declare class PostQuoteImageBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
