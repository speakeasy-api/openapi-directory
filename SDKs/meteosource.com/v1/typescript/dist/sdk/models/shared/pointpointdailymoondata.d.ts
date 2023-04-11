import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointDailyMoonData extends SpeakeasyBase {
    /**
     * True if the moon never rises on given day, false otherwise.
     */
    alwaysDown?: boolean;
    /**
     * True if the moon never sets on given day, false otherwise.
     */
    alwaysUp?: boolean;
    /**
     * Name of the moon phase, one of 'new_moon', 'first_quarter', 'full_moon', 'last_quarter'.
     */
    phase?: Uint8Array;
    /**
     * Datetime of the moonrise or null if the moon does not rise on given day.
     */
    rise?: Date;
    /**
     * Datetime of the moonset or null if the moon does not set on given day.
     */
    set?: Date;
}
