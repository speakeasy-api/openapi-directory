import { SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";
/**
 * A representation of an integer mean metric contribution.
 */
export declare class IntegerMean extends SpeakeasyBase {
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    count?: SplitInt64;
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    sum?: SplitInt64;
}
