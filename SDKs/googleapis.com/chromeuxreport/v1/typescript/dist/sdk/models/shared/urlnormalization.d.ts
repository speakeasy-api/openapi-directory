import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
 */
export declare class UrlNormalization extends SpeakeasyBase {
    /**
     * The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up.
     */
    normalizedUrl?: string;
    /**
     * The original requested URL prior to any normalization actions.
     */
    originalUrl?: string;
}
