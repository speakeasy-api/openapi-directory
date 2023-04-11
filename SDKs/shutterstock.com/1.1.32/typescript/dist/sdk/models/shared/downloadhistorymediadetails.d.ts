import { SpeakeasyBase } from "../../../internal/utils";
import { DownloadHistoryFormatDetails } from "./downloadhistoryformatdetails";
/**
 * Information about the downloaded media
 */
export declare class DownloadHistoryMediaDetails extends SpeakeasyBase {
    /**
     * Information about the format of a download
     */
    format?: DownloadHistoryFormatDetails;
    /**
     * ID of the download history media details
     */
    id: string;
}
