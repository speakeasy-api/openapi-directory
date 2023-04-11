import { SpeakeasyBase } from "../../../internal/utils";
import { PointPointDailyEveningCloudCoverData } from "./pointpointdailyeveningcloudcoverdata";
import { PointPointDailyEveningPrecipitationData } from "./pointpointdailyeveningprecipitationdata";
import { PointPointDailyEveningProbData } from "./pointpointdailyeveningprobdata";
import { PointPointDailyEveningWindData } from "./pointpointdailyeveningwinddata";
export declare class PointPointDailyEveningData extends SpeakeasyBase {
    cloudCover: PointPointDailyEveningCloudCoverData;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    dewPoint?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    feelsLike?: number;
    /**
     * Relative humidity. (evening avg)
     *
     * @remarks
     * Unit: \%
     */
    humidity?: number;
    /**
     * Evening numeric identifier of the weather icon. The following values can appear:
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
     * Unit: icon
     */
    icon?: number;
    /**
     * Total column of ozone. (evening avg)
     *
     * @remarks
     * Unit: Dobson
     */
    ozone?: number;
    precipitation: PointPointDailyEveningPrecipitationData;
    /**
     * Atmospheric pressure at mean sea level. (evening avg)
     *
     * @remarks
     * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
     */
    pressure?: number;
    probability: PointPointDailyEveningProbData;
    /**
     * Snow depth. (evening avg)
     *
     * @remarks
     * Units: metric = cm, us = inch, uk = cm, ca = cm
     */
    snowDepth?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    soilTemperature?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    surfaceTemperature?: number;
    /**
     * Temperature 2 metres above ground. (evening avg)
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    temperature?: number;
    /**
     * Visibility. (evening avg)
     *
     * @remarks
     * Units: metric = km, us = mi, uk = mi, ca = km
     */
    visibility?: number;
    /**
     * Evening day string identifier of the weather icon, e.g. `light_rain`.
     */
    weather?: string;
    wind: PointPointDailyEveningWindData;
    /**
     * Temperature 2 metres above ground. (evening avg)
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    windChill?: number;
}
