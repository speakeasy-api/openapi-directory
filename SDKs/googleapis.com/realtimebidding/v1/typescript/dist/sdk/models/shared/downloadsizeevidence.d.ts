import { SpeakeasyBase } from "../../../internal/utils";
import { UrlDownloadSize } from "./urldownloadsize";
/**
 * Total download size and URL-level download size breakdown for resources in a creative.
 */
export declare class DownloadSizeEvidence extends SpeakeasyBase {
    /**
     * Download size broken down by URLs with the top download size.
     */
    topUrlDownloadSizeBreakdowns?: UrlDownloadSize[];
    /**
     * Total download size (in kilobytes) for all the resources in the creative.
     */
    totalDownloadSizeKb?: number;
}
