import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointHourlyProbData extends SpeakeasyBase {
    /**
     * Unit: \%
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
