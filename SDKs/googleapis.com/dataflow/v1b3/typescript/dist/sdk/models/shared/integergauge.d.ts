import { SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";
/**
 * A metric value representing temporal values of a variable.
 */
export declare class IntegerGauge extends SpeakeasyBase {
    /**
     * The time at which this value was measured. Measured as msecs from epoch.
     */
    timestamp?: string;
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    value?: SplitInt64;
}
