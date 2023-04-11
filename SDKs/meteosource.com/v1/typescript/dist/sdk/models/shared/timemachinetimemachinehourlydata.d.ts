import { SpeakeasyBase } from "../../../internal/utils";
import { TimeMachineTimeMachineCloudCoverData } from "./timemachinetimemachinecloudcoverdata";
import { TimeMachineTimeMachinePrecipitationData } from "./timemachinetimemachineprecipitationdata";
import { TimeMachineTimeMachineWindData } from "./timemachinetimemachinewinddata";
export declare class TimeMachineTimeMachineHourlyData extends SpeakeasyBase {
    /**
     * Convective available potential energy.
     *
     * @remarks
     * Unit: J/kg
     */
    cape?: number;
    cloudCover: TimeMachineTimeMachineCloudCoverData;
    /**
     * Datetime in YYYY-MM-DDTHH:MM:SS format.
     */
    date?: Date;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    dewPoint?: number;
    /**
     * Evaporation of liquid water into water vapor.
     *
     * @remarks
     * Unit: mm/h
     */
    evaporation?: number;
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
     * Unit: N/A
     */
    icon?: number;
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
    precipitation: TimeMachineTimeMachinePrecipitationData;
    /**
     * Atmospheric pressure at mean sea level.
     *
     * @remarks
     * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
     */
    pressure?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    soilTemperature?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    surfaceTemperature?: number;
    /**
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    temperature?: number;
    /**
     * String identifier of the weather icon, e.g. `light_rain`.
     */
    weather?: string;
    wind: TimeMachineTimeMachineWindData;
    /**
     * Windchill temperature.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    windChill?: number;
}
