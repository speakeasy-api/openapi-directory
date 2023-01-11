import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUpdatedVideosSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetUpdatedVideosQueryParams extends SpeakeasyBase {
    endDate?: Date;
    interval?: string;
    page?: number;
    perPage?: number;
    sort?: GetUpdatedVideosSortEnum;
    startDate?: Date;
}
export declare class GetUpdatedVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetUpdatedVideosRequest extends SpeakeasyBase {
    queryParams: GetUpdatedVideosQueryParams;
    security: GetUpdatedVideosSecurity;
}
export declare class GetUpdatedVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updatedMediaDataList?: any;
}
