import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointDailyAfternoonWindData extends SpeakeasyBase {
    /**
     * Afternoon wind direction angle in degrees, 180° means wind from the south.
     *
     * @remarks
     * Unit: degrees
     */
    angle?: number;
    /**
     * Afternoon wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
     *
     * @remarks
     * Unit: 16dir
     */
    dir?: Uint8Array;
    /**
     * Wind gust speed. (afternoon max)
     *
     * @remarks
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    gusts?: number;
    /**
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    speed?: number;
}
