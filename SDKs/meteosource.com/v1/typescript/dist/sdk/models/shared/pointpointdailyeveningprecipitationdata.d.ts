import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointDailyEveningPrecipitationData extends SpeakeasyBase {
    /**
     * Total precipitation amount accumulated since last hour. (evening sum)
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
