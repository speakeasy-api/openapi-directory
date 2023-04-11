import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUpdatedEditorialImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Sort by
 */
export declare enum GetUpdatedEditorialImagesSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
/**
 * Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted
 */
export declare enum GetUpdatedEditorialImagesTypeEnum {
    Edit = "edit",
    Addition = "addition"
}
export declare class GetUpdatedEditorialImagesRequest extends SpeakeasyBase {
    /**
     * Show only editorial content that is available for distribution in a certain country
     */
    country: string;
    /**
     * The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     */
    cursor?: string;
    /**
     * Show images that were taken before the specified date
     */
    dateTakenEnd?: Date;
    /**
     * Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets
     */
    dateTakenStart?: Date;
    /**
     * Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.
     */
    dateUpdatedEnd: Date;
    /**
     * Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.
     */
    dateUpdatedStart: Date;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Sort by
     */
    sort?: GetUpdatedEditorialImagesSortEnum;
    /**
     * Show only editorial content from certain suppliers
     */
    supplierCode?: string[];
    /**
     * Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted
     */
    type: GetUpdatedEditorialImagesTypeEnum;
}
export declare class GetUpdatedEditorialImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    editorialUpdatedResults?: shared.EditorialUpdatedResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
