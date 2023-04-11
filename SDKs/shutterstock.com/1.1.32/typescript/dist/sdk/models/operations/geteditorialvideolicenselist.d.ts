import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEditorialVideoLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * Filter licenses by download availability
 */
export declare enum GetEditorialVideoLicenseListDownloadAvailabilityEnum {
    All = "all",
    Downloadable = "downloadable",
    NonDownloadable = "non_downloadable"
}
/**
 * Sort order
 */
export declare enum GetEditorialVideoLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetEditorialVideoLicenseListRequest extends SpeakeasyBase {
    /**
     * Filter licenses by download availability
     */
    downloadAvailability?: GetEditorialVideoLicenseListDownloadAvailabilityEnum;
    /**
     * Show licenses created before the specified date
     */
    endDate?: Date;
    /**
     * Show editorial videos that are available with the specified license name
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
    sort?: GetEditorialVideoLicenseListSortEnum;
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
    /**
     * Show licenses for the specified editorial video ID
     */
    videoId?: string;
}
export declare class GetEditorialVideoLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    downloadHistoryDataList?: shared.DownloadHistoryDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
