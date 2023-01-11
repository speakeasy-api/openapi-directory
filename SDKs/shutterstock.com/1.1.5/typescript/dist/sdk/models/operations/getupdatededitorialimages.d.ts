import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUpdatedEditorialImagesSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare enum GetUpdatedEditorialImagesTypeEnum {
    Edit = "edit",
    Addition = "addition"
}
export declare class GetUpdatedEditorialImagesQueryParams extends SpeakeasyBase {
    country: string;
    cursor?: string;
    dateTakenEnd?: string;
    dateTakenStart?: string;
    dateUpdatedEnd: Date;
    dateUpdatedStart: Date;
    perPage?: number;
    sort?: GetUpdatedEditorialImagesSortEnum;
    supplierCode?: string[];
    type: GetUpdatedEditorialImagesTypeEnum;
}
export declare class GetUpdatedEditorialImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetUpdatedEditorialImagesRequest extends SpeakeasyBase {
    queryParams: GetUpdatedEditorialImagesQueryParams;
    security: GetUpdatedEditorialImagesSecurity;
}
export declare class GetUpdatedEditorialImagesResponse extends SpeakeasyBase {
    contentType: string;
    editorialUpdatedResults?: shared.EditorialUpdatedResults;
    statusCode: number;
}
