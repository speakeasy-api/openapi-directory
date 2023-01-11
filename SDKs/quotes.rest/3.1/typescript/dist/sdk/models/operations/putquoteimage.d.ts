import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutQuoteImageQueryParams extends SpeakeasyBase {
    bgColor?: string;
    bgimageId?: string;
    branding?: boolean;
    fontId?: string;
    halign?: string;
    height?: number;
    includeTransparentLayer?: boolean;
    quoteId: string;
    textColor?: string;
    textSize?: string;
    valign?: string;
    width?: number;
}
export declare class PutQuoteImageSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PutQuoteImageRequest extends SpeakeasyBase {
    queryParams: PutQuoteImageQueryParams;
    security: PutQuoteImageSecurity;
}
export declare class PutQuoteImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
