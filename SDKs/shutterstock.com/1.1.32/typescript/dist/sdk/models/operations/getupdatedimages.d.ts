import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUpdatedImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Sort order
 */
export declare enum GetUpdatedImagesSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare enum GetUpdatedImagesTypeEnum {
    Addition = "addition",
    Deletion = "deletion",
    Edit = "edit"
}
export declare class GetUpdatedImagesRequest extends SpeakeasyBase {
    /**
     * Show images updated before the specified date
     */
    endDate?: Date;
    /**
     * Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request
     */
    interval?: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Sort order
     */
    sort?: GetUpdatedImagesSortEnum;
    /**
     * Show images updated on or after the specified date
     */
    startDate?: Date;
    /**
     * Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways
     */
    type?: GetUpdatedImagesTypeEnum[];
}
export declare class GetUpdatedImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updatedMediaDataList?: shared.UpdatedMediaDataList;
}
