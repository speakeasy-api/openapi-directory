import { SpeakeasyBase } from "../../../internal/utils";
import { WmxSite } from "./wmxsite";
/**
 * List of sites with access level information.
 */
export declare class SitesListResponse extends SpeakeasyBase {
    /**
     * Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).
     */
    siteEntry?: WmxSite[];
}
