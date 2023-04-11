import { SpeakeasyBase } from "../../../internal/utils";
import { VideoOffset } from "./videooffset";
/**
 * Skippable Settings
 */
export declare class SiteSkippableSetting extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting".
     */
    kind?: string;
    /**
     * Video Offset
     */
    progressOffset?: VideoOffset;
    /**
     * Video Offset
     */
    skipOffset?: VideoOffset;
    /**
     * Whether the user can skip creatives served to this site. This will act as default for new placements created under this site.
     */
    skippable?: boolean;
}
