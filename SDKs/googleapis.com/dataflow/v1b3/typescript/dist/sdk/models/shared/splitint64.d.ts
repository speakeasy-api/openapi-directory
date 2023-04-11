import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
 */
export declare class SplitInt64 extends SpeakeasyBase {
    /**
     * The high order bits, including the sign: n >> 32.
     */
    highBits?: number;
    /**
     * The low order bits: n & 0xffffffff.
     */
    lowBits?: number;
}
