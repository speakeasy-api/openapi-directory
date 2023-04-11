import { SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";
/**
 * A representation of a floating point mean metric contribution.
 */
export declare class FloatingPointMean extends SpeakeasyBase {
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    count?: SplitInt64;
    /**
     * The sum of all values being aggregated.
     */
    sum?: number;
}
