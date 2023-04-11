import { SpeakeasyBase } from "../../../internal/utils";
import { ClickThroughUrl } from "./clickthroughurl";
/**
 * Rich Media Exit Override.
 */
export declare class RichMediaExitOverride extends SpeakeasyBase {
    /**
     * Click-through URL
     */
    clickThroughUrl?: ClickThroughUrl;
    /**
     * Whether to use the clickThroughUrl. If false, the creative-level exit will be used.
     */
    enabled?: boolean;
    /**
     * ID for the override to refer to a specific exit in the creative.
     */
    exitId?: string;
}
