import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Each Version is owned by a Channel. A Version only displays the Version number (e.g. 84.0.4147.38). A Version owns a collection of releases.
 */
export declare class Version extends SpeakeasyBase {
    /**
     * Version name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}" e.g. "chrome/platforms/win/channels/beta/versions/84.0.4147.38"
     */
    name?: string;
    /**
     * String containing just the version number. e.g. "84.0.4147.38"
     */
    version?: string;
}
