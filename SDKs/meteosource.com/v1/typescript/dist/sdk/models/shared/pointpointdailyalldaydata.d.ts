import { SpeakeasyBase } from "../../../internal/utils";
import { PointPointDailyAllDayCloudCoverData } from "./pointpointdailyalldaycloudcoverdata";
import { PointPointDailyAllDayPrecipitationData } from "./pointpointdailyalldayprecipitationdata";
import { PointPointDailyAllDayProbData } from "./pointpointdailyalldayprobdata";
import { PointPointDailyAllDayWindData } from "./pointpointdailyalldaywinddata";
export declare class PointPointDailyAllDayData extends SpeakeasyBase {
    cloudCover: PointPointDailyAllDayCloudCoverData;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    dewPoint?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    dewPointMax?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    dewPointMin?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    feelsLike?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    feelsLikeMax?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    feelsLikeMin?: number;
    /**
     * Relative humidity. (allday avg)
     *
     * @remarks
     * Unit: \%
     */
    humidity?: number;
    /**
     * Numeric identifier of the weather icon. The following values can appear:
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
     * Total column of ozone. (allday avg)
     *
     * @remarks
     * Unit: Dobson
     */
    ozone?: number;
    precipitation: PointPointDailyAllDayPrecipitationData;
    /**
     * Atmospheric pressure at mean sea level. (allday avg)
     *
     * @remarks
     * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
     */
    pressure?: number;
    probability: PointPointDailyAllDayProbData;
    /**
     * Snow depth. (allday avg)
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
    soilTemperatureMax?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    soilTemperatureMin?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    surfaceTemperature?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    surfaceTemperatureMax?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    surfaceTemperatureMin?: number;
    /**
     * Temperature 2 metres above ground. (allday avg)
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    temperature?: number;
    /**
     * Temperature 2 metres above ground. (allday max)
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    temperatureMax?: number;
    /**
     * Temperature 2 metres above ground. (allday min)
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    temperatureMin?: number;
    /**
     * Visibility. (allday avg)
     *
     * @remarks
     * Units: metric = km, us = mi, uk = mi, ca = km
     */
    visibility?: number;
    /**
     * All day string identifier of the weather icon, e.g. `light_rain`.
     */
    weather?: string;
    wind: PointPointDailyAllDayWindData;
    /**
     * Temperature 2 metres above ground. (allday avg)
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    windChill?: number;
    /**
     * Temperature 2 metres above ground. (allday max)
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    windChillMax?: number;
    /**
     * Temperature 2 metres above ground. (allday min)
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    windChillMin?: number;
}
