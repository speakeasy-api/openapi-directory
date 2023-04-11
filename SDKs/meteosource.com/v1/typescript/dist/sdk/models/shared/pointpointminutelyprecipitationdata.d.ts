import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointMinutelyPrecipitationData extends SpeakeasyBase {
    /**
     * Datetime in YYYY-MM-DDTHH:MM:SS format.
     */
    date?: Date;
    /**
     * Minutely precipitation amount (per hour). For the startup tier, showing one value per 10 minutes.
     *
     * @remarks
     * For other tiers, showing one value per each minute.
     *
     * Unit: mm/h
     */
    precipitation?: number;
}
