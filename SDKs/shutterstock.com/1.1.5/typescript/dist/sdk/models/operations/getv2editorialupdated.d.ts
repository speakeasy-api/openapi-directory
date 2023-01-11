import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetV2EditorialUpdatedSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare enum GetV2EditorialUpdatedTypeEnum {
    Edit = "edit",
    Addition = "addition"
}
export declare class GetV2EditorialUpdatedQueryParams extends SpeakeasyBase {
    country: string;
    cursor?: string;
    dateTakenEnd?: string;
    dateTakenStart?: string;
    dateUpdatedEnd: Date;
    dateUpdatedStart: Date;
    perPage?: number;
    sort?: GetV2EditorialUpdatedSortEnum;
    supplierCode?: string[];
    type: GetV2EditorialUpdatedTypeEnum;
}
export declare class GetV2EditorialUpdatedSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetV2EditorialUpdatedRequest extends SpeakeasyBase {
    queryParams: GetV2EditorialUpdatedQueryParams;
    security: GetV2EditorialUpdatedSecurity;
}
export declare class GetV2EditorialUpdatedResponse extends SpeakeasyBase {
    contentType: string;
    editorialUpdatedResults?: shared.EditorialUpdatedResults;
    statusCode: number;
}
