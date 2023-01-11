import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetImageListViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetImageListQueryParams extends SpeakeasyBase {
    id: string[];
    view?: GetImageListViewEnum;
}
export declare class GetImageListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetImageListRequest extends SpeakeasyBase {
    queryParams: GetImageListQueryParams;
    security: GetImageListSecurity;
}
export declare class GetImageListResponse extends SpeakeasyBase {
    contentType: string;
    imageDataList?: any;
    statusCode: number;
}
