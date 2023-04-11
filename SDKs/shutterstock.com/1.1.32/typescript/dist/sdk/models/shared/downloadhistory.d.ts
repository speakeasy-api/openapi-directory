import { SpeakeasyBase } from "../../../internal/utils";
import { DownloadHistoryMediaDetails } from "./downloadhistorymediadetails";
import { DownloadHistoryRevshareDetails } from "./downloadhistoryrevsharedetails";
import { DownloadHistoryUserDetails } from "./downloadhistoryuserdetails";
/**
 * Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object
 */
export declare class DownloadHistory extends SpeakeasyBase {
    /**
     * Information about the downloaded media
     */
    audio?: DownloadHistoryMediaDetails;
    /**
     * Date the media was downloaded the first time
     */
    downloadTime: Date;
    /**
     * ID of the download
     */
    id: string;
    /**
     * Information about the downloaded media
     */
    image?: DownloadHistoryMediaDetails;
    /**
     * Specifies if the media is downloadable via its respective downloads endpoint
     */
    isDownloadable?: boolean;
    /**
     * The name of the license of this download
     */
    license: string;
    /**
     * The metadata that was passed in the original licensing request
     */
    metadata?: Record<string, any>;
    /**
     * Pricing information for revenue-sharing transactions
     */
    revshare?: DownloadHistoryRevshareDetails;
    /**
     * ID of the subscription used to perform this download
     */
    subscriptionId?: string;
    /**
     * Information about a user
     */
    user?: DownloadHistoryUserDetails;
    /**
     * Information about the downloaded media
     */
    video?: DownloadHistoryMediaDetails;
}
