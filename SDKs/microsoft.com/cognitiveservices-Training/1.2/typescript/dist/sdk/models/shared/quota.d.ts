import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a quota
 */
export declare class Quota extends SpeakeasyBase {
    /**
     * Gets the time remaining until the quota resets. Null if this quota does not reset.
     */
    timeUntilReset?: string;
    /**
     * The total allowable amount in the quota
     */
    total?: number;
    /**
     * The amount of quota that has currently been used
     */
    used?: number;
}
