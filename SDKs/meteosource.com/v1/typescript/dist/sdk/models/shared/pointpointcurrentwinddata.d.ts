import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointCurrentWindData extends SpeakeasyBase {
    /**
     * Wind direction angle in degrees, 180° means wind from the south.
     *
     * @remarks
     * Unit: degrees
     */
    angle?: number;
    /**
     * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
     *
     * @remarks
     * Unit: 16dir
     */
    dir?: Uint8Array;
    /**
     * Wind gust speed.
     *
     * @remarks
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    gusts?: number;
    /**
     * Wind speed 10 metres above the ground.
     *
     * @remarks
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    speed?: number;
}
