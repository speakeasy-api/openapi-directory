import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetVideoListViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetVideoListQueryParams extends SpeakeasyBase {
    id: string[];
    view?: GetVideoListViewEnum;
}
export declare class GetVideoListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetVideoListRequest extends SpeakeasyBase {
    queryParams: GetVideoListQueryParams;
    security: GetVideoListSecurity;
}
export declare class GetVideoListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoDataList?: any;
}
