import { SpeakeasyBase } from "../../../internal/utils";
import { Level } from "./level";
import { Segment } from "./segment";
/**
 * Classification
 */
export declare class Classification extends SpeakeasyBase {
    genre?: Level;
    /**
     * True if this is the entity's primary classification
     */
    primary?: boolean;
    /**
     * Segment
     */
    segment?: Segment;
    subGenre?: Level;
    subType?: Level;
    type?: Level;
}
