import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQshowListQueryParams extends SpeakeasyBase {
    public?: boolean;
    start?: number;
}
export declare class GetQshowListSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQshowListRequest extends SpeakeasyBase {
    queryParams: GetQshowListQueryParams;
    security: GetQshowListSecurity;
}
export declare class GetQshowListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
