import { SpeakeasyBase } from "../../../internal/utils";
import { DfpSettings } from "./dfpsettings";
/**
 * Directory Site Settings
 */
export declare class DirectorySiteSettings extends SpeakeasyBase {
    /**
     * Whether this directory site has disabled active view creatives.
     */
    activeViewOptOut?: boolean;
    /**
     * Google Ad Manager Settings
     */
    dfpSettings?: DfpSettings;
    /**
     * Whether this site accepts in-stream video ads.
     */
    instreamVideoPlacementAccepted?: boolean;
    /**
     * Whether this site accepts interstitial ads.
     */
    interstitialPlacementAccepted?: boolean;
}
