import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteQuoteImageQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteQuoteImageSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class DeleteQuoteImageRequest extends SpeakeasyBase {
    queryParams: DeleteQuoteImageQueryParams;
    security: DeleteQuoteImageSecurity;
}
export declare class DeleteQuoteImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
