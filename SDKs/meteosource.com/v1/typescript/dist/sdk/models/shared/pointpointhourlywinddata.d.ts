import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointHourlyWindData extends SpeakeasyBase {
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
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    gusts?: number;
    /**
     * Units: metric = m/s, us = mph, uk = mph, ca = km/h
     */
    speed?: number;
}
