import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSfxLicenseListSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * Filter licenses by download availability
 */
export declare enum GetSfxLicenseListDownloadAvailabilityEnum {
    All = "all",
    Downloadable = "downloadable",
    NonDownloadable = "non_downloadable"
}
/**
 * Sort order
 */
export declare enum GetSfxLicenseListSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetSfxLicenseListRequest extends SpeakeasyBase {
    /**
     * Filter licenses by download availability
     */
    downloadAvailability?: GetSfxLicenseListDownloadAvailabilityEnum;
    /**
     * Show licenses created before the specified date
     */
    endDate?: Date;
    /**
     * Show sound effects that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
     */
    license?: string;
    /**
     * Filter by the license ID
     */
    licenseId?: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Show licenses for the specified sound effects ID
     */
    sfxId?: string;
    /**
     * Sort order
     */
    sort?: GetSfxLicenseListSortEnum;
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
export declare class GetSfxLicenseListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    downloadHistoryDataList?: shared.DownloadHistoryDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
