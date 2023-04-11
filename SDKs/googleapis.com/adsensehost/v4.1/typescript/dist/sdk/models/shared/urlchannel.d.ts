import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class UrlChannel extends SpeakeasyBase {
    /**
     * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsensehost#urlChannel.
     */
    kind?: string;
    /**
     * URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
     */
    urlPattern?: string;
}
