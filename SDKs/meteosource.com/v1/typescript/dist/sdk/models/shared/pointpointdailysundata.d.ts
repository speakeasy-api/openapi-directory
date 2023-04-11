import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointDailySunData extends SpeakeasyBase {
    /**
     * True if the sun never rises on given day (polar night), false otherwise.
     */
    alwaysDown?: boolean;
    /**
     * True if the sun never sets on given day (polar day), false otherwise.
     */
    alwaysUp?: boolean;
    /**
     * Datetime of the sunrise or null during polar day/night.
     */
    rise?: Date;
    /**
     * Datetime of the sunset or null during polar day/night.
     */
    set?: Date;
}
