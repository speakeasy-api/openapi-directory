import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContributorListQueryParams extends SpeakeasyBase {
    id: string[];
}
export declare class GetContributorListSecurity extends SpeakeasyBase {
    customerAccessCode?: shared.SchemeCustomerAccessCode;
    basic?: shared.SchemeBasic;
}
export declare class GetContributorListRequest extends SpeakeasyBase {
    queryParams: GetContributorListQueryParams;
    security: GetContributorListSecurity;
}
export declare class GetContributorListResponse extends SpeakeasyBase {
    contentType: string;
    contributorProfileDataList?: any;
    statusCode: number;
}
