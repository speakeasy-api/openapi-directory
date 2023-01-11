import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetImageLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetImageLicenseListQueryParams extends SpeakeasyBase {
    endDate?: Date;
    imageId?: string;
    license?: string;
    page?: number;
    perPage?: number;
    sort?: GetImageLicenseListSortEnum;
    startDate?: Date;
    username?: string;
}
export declare class GetImageLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetImageLicenseListRequest extends SpeakeasyBase {
    queryParams: GetImageLicenseListQueryParams;
    security: GetImageLicenseListSecurity;
}
export declare class GetImageLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    downloadHistoryDataList?: any;
    statusCode: number;
}
