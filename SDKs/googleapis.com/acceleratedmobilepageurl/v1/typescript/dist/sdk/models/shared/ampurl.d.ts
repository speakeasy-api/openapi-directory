import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AMP URL response for a requested URL.
 */
export declare class AmpUrl extends SpeakeasyBase {
    /**
     * The AMP URL pointing to the publisher's web server.
     */
    ampUrl?: string;
    /**
     * The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to the cached document in the Google AMP Cache.
     */
    cdnAmpUrl?: string;
    /**
     * The original non-AMP URL.
     */
    originalUrl?: string;
}
