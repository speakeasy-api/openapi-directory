import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The URL-level breakdown for the download size.
 */
export declare class UrlDownloadSize extends SpeakeasyBase {
    /**
     * Download size of the URL in kilobytes.
     */
    downloadSizeKb?: number;
    /**
     * The normalized URL with query parameters and fragment removed.
     */
    normalizedUrl?: string;
}
