import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteQuoteImageFontQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteQuoteImageFontSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class DeleteQuoteImageFontRequest extends SpeakeasyBase {
    queryParams: DeleteQuoteImageFontQueryParams;
    security: DeleteQuoteImageFontSecurity;
}
export declare class DeleteQuoteImageFontResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
