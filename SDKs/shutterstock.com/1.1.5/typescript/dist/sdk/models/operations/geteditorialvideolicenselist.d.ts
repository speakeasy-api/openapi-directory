import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEditorialVideoLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetEditorialVideoLicenseListQueryParams extends SpeakeasyBase {
    endDate?: Date;
    license?: string;
    page?: number;
    perPage?: number;
    sort?: GetEditorialVideoLicenseListSortEnum;
    startDate?: Date;
    username?: string;
    videoId?: string;
}
export declare class GetEditorialVideoLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialVideoLicenseListRequest extends SpeakeasyBase {
    queryParams: GetEditorialVideoLicenseListQueryParams;
    security: GetEditorialVideoLicenseListSecurity;
}
export declare class GetEditorialVideoLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    downloadHistoryDataList?: any;
    statusCode: number;
}
