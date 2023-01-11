import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetVideoLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetVideoLicenseListQueryParams extends SpeakeasyBase {
    endDate?: Date;
    license?: string;
    page?: number;
    perPage?: number;
    sort?: GetVideoLicenseListSortEnum;
    startDate?: Date;
    username?: string;
    videoId?: string;
}
export declare class GetVideoLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetVideoLicenseListRequest extends SpeakeasyBase {
    queryParams: GetVideoLicenseListQueryParams;
    security: GetVideoLicenseListSecurity;
}
export declare class GetVideoLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    downloadHistoryDataList?: any;
    statusCode: number;
}
