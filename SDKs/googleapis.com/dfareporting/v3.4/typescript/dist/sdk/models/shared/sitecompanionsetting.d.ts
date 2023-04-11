import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
/**
 * Companion Settings
 */
export declare class SiteCompanionSetting extends SpeakeasyBase {
    /**
     * Whether companions are disabled for this site template.
     */
    companionsDisabled?: boolean;
    /**
     * Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes.
     */
    enabledSizes?: Size[];
    /**
     * Whether to serve only static images as companions.
     */
    imageOnly?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting".
     */
    kind?: string;
}
