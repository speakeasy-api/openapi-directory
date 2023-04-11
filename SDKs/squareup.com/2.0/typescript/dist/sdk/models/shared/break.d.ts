import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A record of an employee's break during a shift.
 */
export declare class Break extends SpeakeasyBase {
    /**
     * The `BreakType` that this `Break` was templated on.
     */
    breakTypeId: string;
    /**
     * RFC 3339; follows the same timezone information as `Shift`. Precision up to
     *
     * @remarks
     * the minute is respected; seconds are truncated.
     */
    endAt?: string;
    /**
     * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of
     *
     * @remarks
     * the break.
     */
    expectedDuration: string;
    /**
     * The UUID for this object.
     */
    id?: string;
    /**
     * Whether this break counts towards time worked for compensation
     *
     * @remarks
     * purposes.
     */
    isPaid: boolean;
    /**
     * A human-readable name.
     */
    name: string;
    /**
     * RFC 3339; follows the same timezone information as `Shift`. Precision up to
     *
     * @remarks
     * the minute is respected; seconds are truncated.
     */
    startAt: string;
}
