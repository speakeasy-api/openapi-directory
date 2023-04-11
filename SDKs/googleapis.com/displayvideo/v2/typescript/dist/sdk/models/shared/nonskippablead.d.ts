import { SpeakeasyBase } from "../../../internal/utils";
import { CommonInStreamAttribute } from "./commoninstreamattribute";
/**
 * Details for a non-skippable ad.
 */
export declare class NonSkippableAd extends SpeakeasyBase {
    /**
     * Common attributes for in-stream, non-skippable and bumper ads.
     */
    commonInStreamAttribute?: CommonInStreamAttribute;
    /**
     * The custom parameters to pass custom values to tracking URL template.
     */
    customParameters?: Record<string, string>;
}
