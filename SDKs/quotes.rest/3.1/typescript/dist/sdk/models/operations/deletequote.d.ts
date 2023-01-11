import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteQuoteQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class DeleteQuoteRequest extends SpeakeasyBase {
    queryParams: DeleteQuoteQueryParams;
    security: DeleteQuoteSecurity;
}
export declare class DeleteQuoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
