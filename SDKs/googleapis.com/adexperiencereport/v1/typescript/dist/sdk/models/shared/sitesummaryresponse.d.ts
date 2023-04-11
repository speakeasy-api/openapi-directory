import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformSummary } from "./platformsummary";
/**
 * Response message for GetSiteSummary.
 */
export declare class SiteSummaryResponse extends SpeakeasyBase {
    /**
     * A site's Ad Experience Report summary on a single platform.
     */
    desktopSummary?: PlatformSummary;
    /**
     * A site's Ad Experience Report summary on a single platform.
     */
    mobileSummary?: PlatformSummary;
    /**
     * The name of the reviewed site, e.g. `google.com`.
     */
    reviewedSite?: string;
}
