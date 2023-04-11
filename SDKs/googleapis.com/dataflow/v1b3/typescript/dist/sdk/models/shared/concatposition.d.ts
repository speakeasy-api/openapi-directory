import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.
 */
export declare class ConcatPosition extends SpeakeasyBase {
    /**
     * Index of the inner source.
     */
    index?: number;
    /**
     * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
     */
    position?: Position;
}
