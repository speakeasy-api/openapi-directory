import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeMachinePointDailyStatsWindData extends SpeakeasyBase {
    /**
     * Long-term average wind angle.
     *
     * @remarks
     * Unit: deg
     */
    avgAngle?: number;
    /**
     * Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.
     *
     * @remarks
     * Unit: 16dir
     */
    avgDir?: Uint8Array;
    /**
     * Long-term average wind speed.
     *
     * @remarks
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    avgSpeed?: number;
    /**
     * Historical daily maximum wind gust speed.
     *
     * @remarks
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    maxGust?: number;
    /**
     * Historical daily maximum wind speed.
     *
     * @remarks
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    maxSpeed?: number;
}
