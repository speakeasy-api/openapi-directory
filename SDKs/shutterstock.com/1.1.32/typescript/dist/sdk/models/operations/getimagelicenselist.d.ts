import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImageLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * Filter licenses by download availability
 */
export declare enum GetImageLicenseListDownloadAvailabilityEnum {
    All = "all",
    Downloadable = "downloadable",
    NonDownloadable = "non_downloadable"
}
/**
 * Sort order
 */
export declare enum GetImageLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetImageLicenseListRequest extends SpeakeasyBase {
    /**
     * Filter licenses by download availability
     */
    downloadAvailability?: GetImageLicenseListDownloadAvailabilityEnum;
    /**
     * Show licenses created before the specified date
     */
    endDate?: Date;
    /**
     * Show licenses for the specified image ID
     */
    imageId?: string;
    /**
     * Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
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
    sort?: GetImageLicenseListSortEnum;
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
export declare class GetImageLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    downloadHistoryDataList?: shared.DownloadHistoryDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
