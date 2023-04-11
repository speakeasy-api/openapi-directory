import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
 */
export declare class FixedOrPercent extends SpeakeasyBase {
    /**
     * Specifies a fixed value.
     */
    fixed?: number;
    /**
     * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
     */
    percent?: number;
}
