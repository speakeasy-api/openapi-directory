import { SpeakeasyBase } from "../../../internal/utils";
import { ConcatPosition } from "./concatposition";
/**
 * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
 */
export declare class Position extends SpeakeasyBase {
    /**
     * Position is a byte offset.
     */
    byteOffset?: string;
    /**
     * A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.
     */
    concatPosition?: ConcatPosition;
    /**
     * Position is past all other positions. Also useful for the end position of an unbounded range.
     */
    end?: boolean;
    /**
     * Position is a string key, ordered lexicographically.
     */
    key?: string;
    /**
     * Position is a record index.
     */
    recordIndex?: string;
    /**
     * CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding).
     */
    shufflePosition?: string;
}
