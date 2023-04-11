import { SpeakeasyBase } from "../../../internal/utils";
import { MobileApplicationTargeting } from "./mobileapplicationtargeting";
import { UrlTargeting } from "./urltargeting";
/**
 * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
 */
export declare class PlacementTargeting extends SpeakeasyBase {
    /**
     * Mobile application targeting settings.
     */
    mobileApplicationTargeting?: MobileApplicationTargeting;
    /**
     * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
     */
    urlTargeting?: UrlTargeting;
}
