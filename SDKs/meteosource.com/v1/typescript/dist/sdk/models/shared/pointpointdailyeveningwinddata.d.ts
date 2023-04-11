import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointDailyEveningWindData extends SpeakeasyBase {
    /**
     * Evening wind direction angle in degrees, 180° means wind from the south.
     *
     * @remarks
     * Unit: degrees
     */
    angle?: number;
    /**
     * Evening wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
     *
     * @remarks
     * Unit: 16dir
     */
    dir?: Uint8Array;
    /**
     * Wind gust speed. (evening max)
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
