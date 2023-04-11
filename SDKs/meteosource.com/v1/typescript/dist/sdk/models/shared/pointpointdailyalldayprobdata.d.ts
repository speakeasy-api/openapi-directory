import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointDailyAllDayProbData extends SpeakeasyBase {
    /**
     * Probability the temperature drops below 0 °C. (allday avg)
     *
     * @remarks
     * Unit: %
     */
    freeze?: number;
    /**
     * Probability of non-zero precipitation.
     *
     * @remarks
     * Unit: \%
     */
    precipitation?: number;
    /**
     * Total precipitation amount accumulated since last hour.
     *
     * @remarks
     * Unit: mm/h
     */
    storm?: number;
}
