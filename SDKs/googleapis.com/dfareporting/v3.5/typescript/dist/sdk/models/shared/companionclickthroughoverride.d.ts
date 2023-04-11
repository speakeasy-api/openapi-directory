import { SpeakeasyBase } from "../../../internal/utils";
import { ClickThroughUrl } from "./clickthroughurl";
/**
 * Companion Click-through override.
 */
export declare class CompanionClickThroughOverride extends SpeakeasyBase {
    /**
     * Click-through URL
     */
    clickThroughUrl?: ClickThroughUrl;
    /**
     * ID of the creative for this companion click-through override.
     */
    creativeId?: string;
}
