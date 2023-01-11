import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteImageQueryParams extends SpeakeasyBase {
    binary?: boolean;
    id: string;
}
export declare class GetQuoteImageSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQuoteImageRequest extends SpeakeasyBase {
    queryParams: GetQuoteImageQueryParams;
    security: GetQuoteImageSecurity;
}
export declare class GetQuoteImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
