import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteQuoteImageBackgroundQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteQuoteImageBackgroundSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class DeleteQuoteImageBackgroundRequest extends SpeakeasyBase {
    queryParams: DeleteQuoteImageBackgroundQueryParams;
    security: DeleteQuoteImageBackgroundSecurity;
}
export declare class DeleteQuoteImageBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
