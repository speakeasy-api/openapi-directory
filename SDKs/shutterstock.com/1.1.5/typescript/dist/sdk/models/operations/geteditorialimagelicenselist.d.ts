import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEditorialImageLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetEditorialImageLicenseListQueryParams extends SpeakeasyBase {
    endDate?: Date;
    imageId?: string;
    license?: string;
    page?: number;
    perPage?: number;
    sort?: GetEditorialImageLicenseListSortEnum;
    startDate?: Date;
    username?: string;
}
export declare class GetEditorialImageLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialImageLicenseListRequest extends SpeakeasyBase {
    queryParams: GetEditorialImageLicenseListQueryParams;
    security: GetEditorialImageLicenseListSecurity;
}
export declare class GetEditorialImageLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    downloadHistoryDataList?: any;
    statusCode: number;
}
