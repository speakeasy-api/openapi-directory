import { SpeakeasyBase } from "../../../internal/utils";
import { VideoOffset } from "./videooffset";
/**
 * Skippable Settings
 */
export declare class SkippableSetting extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting".
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
     * Whether the user can skip creatives served to this placement.
     */
    skippable?: boolean;
}
