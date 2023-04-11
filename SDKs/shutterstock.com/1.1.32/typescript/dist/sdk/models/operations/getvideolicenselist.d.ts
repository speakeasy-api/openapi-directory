import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * Filter licenses by download availability
 */
export declare enum GetVideoLicenseListDownloadAvailabilityEnum {
    All = "all",
    Downloadable = "downloadable",
    NonDownloadable = "non_downloadable"
}
/**
 * Sort by oldest or newest videos first
 */
export declare enum GetVideoLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetVideoLicenseListRequest extends SpeakeasyBase {
    /**
     * Filter licenses by download availability
     */
    downloadAvailability?: GetVideoLicenseListDownloadAvailabilityEnum;
    /**
     * Show licenses created before the specified date
     */
    endDate?: Date;
    /**
     * Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
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
     * Sort by oldest or newest videos first
     */
    sort?: GetVideoLicenseListSortEnum;
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
     * Show licenses for the specified video ID
     */
    videoId?: string;
}
export declare class GetVideoLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    downloadHistoryDataList?: shared.DownloadHistoryDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
