import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUpdatedVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Sort by oldest or newest videos first
 */
export declare enum GetUpdatedVideosSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetUpdatedVideosRequest extends SpeakeasyBase {
    /**
     * Show videos updated before the specified date
     */
    endDate?: Date;
    /**
     * Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request
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
     * Sort by oldest or newest videos first
     */
    sort?: GetUpdatedVideosSortEnum;
    /**
     * Show videos updated on or after the specified date
     */
    startDate?: Date;
}
export declare class GetUpdatedVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updatedMediaDataList?: shared.UpdatedMediaDataList;
}
