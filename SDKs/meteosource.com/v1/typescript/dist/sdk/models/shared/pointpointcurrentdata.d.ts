import { SpeakeasyBase } from "../../../internal/utils";
import { PointPointCurrentPrecipitationData } from "./pointpointcurrentprecipitationdata";
import { PointPointCurrentWindData } from "./pointpointcurrentwinddata";
export declare class PointPointCurrentData extends SpeakeasyBase {
    /**
     * Percentage of sky covered by clouds.
     *
     * @remarks
     * Unit: \%
     */
    cloudCover?: number;
    /**
     * Current dew point temperature.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    dewPoint?: number;
    /**
     * Feels like temperature.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    feelsLike?: number;
    /**
     * Relative humidity.
     *
     * @remarks
     * Unit: \%
     */
    humidity?: number;
    /**
     * String identifier of current weather icon, e.g. `light_rain`.
     */
    icon?: string;
    /**
     * Numeric identifier of current weather icon. The following values can appear:
     *
     * @remarks
     *
     * * 1 - Not available
     * * 2 - Sunny
     * * 3 - Mostly sunny
     * * 4 - Partly sunny
     * * 5 - Mostly cloudy
     * * 6 - Cloudy
     * * 7 - Overcast
     * * 8 - Overcast with low clouds
     * * 9 - Fog
     * * 10 - Light rain
     * * 11 - Rain
     * * 12 - Possible rain
     * * 13 - Rain shower
     * * 14 - Thunderstorm
     * * 15 - Local thunderstorms
     * * 16 - Light snow
     * * 17 - Snow
     * * 18 - Possible snow
     * * 19 - Snow shower
     * * 20 - Rain and snow
     * * 21 - Possible rain and snow
     * * 22 - Rain and snow
     * * 23 - Freezing rain
     * * 24 - Possible freezing rain
     * * 25 - Hail
     * * 26 - Clear (night)
     * * 27 - Mostly clear (night)
     * * 28 - Partly clear (night)
     * * 29 - Mostly cloudy (night)
     * * 30 - Cloudy (night)
     * * 31 - Overcast with low clouds (night)
     * * 32 - Rain shower (night)
     * * 33 - Local thunderstorms (night)
     * * 34 - Snow shower (night)
     * * 35 - Rain and snow (night)
     * * 36 - Possible freezing rain (night)
     *
     * Unit: weather_ico0_36
     */
    iconNum?: number;
    /**
     * Global downward short-wave radiation flux.
     *
     * @remarks
     * Unit: W/m2
     */
    irradiance?: number;
    /**
     * Total column of ozone.
     *
     * @remarks
     * Unit: Dobson
     */
    ozone?: number;
    precipitation: PointPointCurrentPrecipitationData;
    /**
     * Atmospheric pressure at mean sea level.
     *
     * @remarks
     * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
     */
    pressure?: number;
    /**
     * Short text summary of current weather, e.g. `Light rain`.
     */
    summary?: string;
    /**
     * Current temperature 2 metres above ground.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    temperature?: number;
    /**
     * UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).
     *
     * @remarks
     * Unit: uv_index
     */
    uvIndex?: number;
    /**
     * Visibility.
     *
     * @remarks
     * Units: metric = km, us = mi, uk = mi, ca = km
     */
    visibility?: number;
    wind: PointPointCurrentWindData;
    /**
     * Windchill temperature.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    windChill?: number;
}
