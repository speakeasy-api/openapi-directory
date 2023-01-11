import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQshowQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class GetQshowSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQshowRequest extends SpeakeasyBase {
    queryParams: GetQshowQueryParams;
    security: GetQshowSecurity;
}
export declare class GetQshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
