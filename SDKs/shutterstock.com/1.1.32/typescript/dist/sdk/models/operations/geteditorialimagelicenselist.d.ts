import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialImageLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * Filter licenses by download availability
 */
export declare enum GetEditorialImageLicenseListDownloadAvailabilityEnum {
    All = "all",
    Downloadable = "downloadable",
    NonDownloadable = "non_downloadable"
}
/**
 * Sort order
 */
export declare enum GetEditorialImageLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetEditorialImageLicenseListRequest extends SpeakeasyBase {
    /**
     * Filter licenses by download availability
     */
    downloadAvailability?: GetEditorialImageLicenseListDownloadAvailabilityEnum;
    /**
     * Show licenses created before the specified date
     */
    endDate?: Date;
    /**
     * Show licenses for the specified editorial image ID
     */
    imageId?: string;
    /**
     * Show editorial images that are available with the specified license name
     */
    license?: string;
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
    sort?: GetEditorialImageLicenseListSortEnum;
    /**
     * Show licenses created on or after the specified date
     */
    startDate?: Date;
    /**
     * Set to true to see license history for all members of your team.
     */
    teamHistory?: boolean;
    /**
     * Filter licenses by username of licensee
     */
    username?: string;
}
export declare class GetEditorialImageLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    downloadHistoryDataList?: shared.DownloadHistoryDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
