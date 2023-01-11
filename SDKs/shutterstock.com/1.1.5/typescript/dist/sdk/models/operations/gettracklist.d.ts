import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTrackListViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetTrackListQueryParams extends SpeakeasyBase {
    id: string[];
    view?: GetTrackListViewEnum;
}
export declare class GetTrackListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetTrackListRequest extends SpeakeasyBase {
    queryParams: GetTrackListQueryParams;
    security: GetTrackListSecurity;
}
export declare class GetTrackListResponse extends SpeakeasyBase {
    audioDataList?: any;
    contentType: string;
    statusCode: number;
}
