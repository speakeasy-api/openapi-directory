import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointHourlyPrecipitationData extends SpeakeasyBase {
    /**
     * Total precipitation amount accumulated since last hour.
     *
     * @remarks
     * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
     */
    convective?: number;
    /**
     * Precipitation in the surrounding of queried location. The data is 7x7 ASCII art string, queried location being in the center. Character `#` means there is precipitation, `.` means no precipitation. The distance between neighboring cells is 0.25°.
     *
     * @remarks
     * Unit: rainspot
     */
    rainspot?: Uint8Array;
    /**
     * Total precipitation amount accumulated since last hour.
     *
     * @remarks
     * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
     */
    total?: number;
    /**
     * Precipitation type, may be one of:
     *
     * @remarks
     *
     * * `none`, it there is no precipitation
     * * `rain`
     * * `snow`
     * * `rain_snow`
     * * `ice pellets`
     * * `frozen rain`
     *
     * Unit: precipitation type
     */
    type?: Uint8Array;
}
