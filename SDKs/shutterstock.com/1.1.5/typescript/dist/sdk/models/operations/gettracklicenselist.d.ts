import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTrackLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetTrackLicenseListQueryParams extends SpeakeasyBase {
    audioId?: string;
    endDate?: Date;
    license?: string;
    page?: number;
    perPage?: number;
    sort?: GetTrackLicenseListSortEnum;
    startDate?: Date;
    username?: string;
}
export declare class GetTrackLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetTrackLicenseListRequest extends SpeakeasyBase {
    queryParams: GetTrackLicenseListQueryParams;
    security: GetTrackLicenseListSecurity;
}
export declare class GetTrackLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    downloadHistoryDataList?: any;
    statusCode: number;
}
