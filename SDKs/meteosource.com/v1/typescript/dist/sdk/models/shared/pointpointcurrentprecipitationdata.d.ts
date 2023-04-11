import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointCurrentPrecipitationData extends SpeakeasyBase {
    /**
     * Current amount of precipitation.
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
     * Unit: prec_str
     */
    type?: Uint8Array;
}
