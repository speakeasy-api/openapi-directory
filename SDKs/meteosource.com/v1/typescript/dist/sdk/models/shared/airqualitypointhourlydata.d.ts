import { SpeakeasyBase } from "../../../internal/utils";
export declare class AirQualityPointHourlyData extends SpeakeasyBase {
    /**
     * Total aerosol optical depth at 550 nm.
     *
     * @remarks
     * Unit: dimensionless
     */
    aerosol550?: number;
    /**
     * Air quality index. The following values can appear:
     *
     * @remarks
     *
     * * 1 - Very good
     * * 2 - Good
     * * 3 - Medium
     * * 4 - Poor
     * * 5 - Very poor
     * * 6 - Extremely poor
     *
     * Unit: index
     */
    airQuality?: number;
    /**
     * Carbon monoxide at surface level.
     *
     * @remarks
     * Unit: µg/m3
     */
    coSurface?: number;
    /**
     * Datetime in YYYY-MM-DDTHH:MM:SS format.
     */
    date?: Date;
    /**
     * Dust aerosol optical depth at 550 nm.
     *
     * @remarks
     * Unit: dimensionless
     */
    dust550nm?: number;
    /**
     * Dust aerosol (0.55 - 0.9 µm) mixing ratio.
     *
     * @remarks
     * Unit: kg/kg
     */
    dustMixingRatio05?: number;
    /**
     * Nitrogen dioxide at surface level.
     *
     * @remarks
     * Unit: µg/m3
     */
    no2Surface?: number;
    /**
     * Nitrogen monoxide at surface level.
     *
     * @remarks
     * Unit: µg/m3
     */
    noSurface?: number;
    /**
     * Ozone.
     *
     * @remarks
     * Unit: µg/m3
     */
    ozoneSurface?: number;
    /**
     * Total column ozone.
     *
     * @remarks
     * Unit: Dobson
     */
    ozoneTotal?: number;
    /**
     * Particulate matter d < 10 µm (PM10).
     *
     * @remarks
     * Unit: µg/m3
     */
    pm10?: number;
    /**
     * Particulate matter d < 2.5 µm (PM2.5).
     *
     * @remarks
     * Unit: µg/m3
     */
    pm25?: number;
    /**
     * Sulphur dioxide at surface level.
     *
     * @remarks
     * Unit: µg/m3
     */
    so2Surface?: number;
}
