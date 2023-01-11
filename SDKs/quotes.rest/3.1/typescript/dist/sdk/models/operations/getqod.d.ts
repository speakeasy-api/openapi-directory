import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQodQueryParams extends SpeakeasyBase {
    category?: string;
    language?: string;
}
export declare class GetQodSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQodRequest extends SpeakeasyBase {
    queryParams: GetQodQueryParams;
    security: GetQodSecurity;
}
export declare class GetQodResponse extends SpeakeasyBase {
    contentType: string;
    quoteResponse?: any;
    statusCode: number;
}
