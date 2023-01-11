import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUpdatedImagesSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare enum GetUpdatedImagesTypeEnum {
    Addition = "addition",
    Deletion = "deletion",
    Edit = "edit"
}
export declare class GetUpdatedImagesQueryParams extends SpeakeasyBase {
    endDate?: Date;
    interval?: string;
    page?: number;
    perPage?: number;
    sort?: GetUpdatedImagesSortEnum;
    startDate?: Date;
    type?: GetUpdatedImagesTypeEnum[];
}
export declare class GetUpdatedImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetUpdatedImagesRequest extends SpeakeasyBase {
    queryParams: GetUpdatedImagesQueryParams;
    security: GetUpdatedImagesSecurity;
}
export declare class GetUpdatedImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updatedMediaDataList?: any;
}
