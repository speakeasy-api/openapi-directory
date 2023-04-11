import { SpeakeasyBase } from "../../../internal/utils";
import { AdSize } from "./adsize";
/**
 * Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
 */
export declare class CreativeSpecification extends SpeakeasyBase {
    /**
     * Companion sizes may be filled in only when this is a video creative.
     */
    creativeCompanionSizes?: AdSize[];
    /**
     * Represents size of a single ad slot, or a creative.
     */
    creativeSize?: AdSize;
}
