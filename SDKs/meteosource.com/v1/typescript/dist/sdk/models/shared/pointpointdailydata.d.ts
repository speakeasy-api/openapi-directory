import { SpeakeasyBase } from "../../../internal/utils";
import { PointPointDailyAfternoonData } from "./pointpointdailyafternoondata";
import { PointPointDailyAllDayData } from "./pointpointdailyalldaydata";
import { PointPointDailyAstroData } from "./pointpointdailyastrodata";
import { PointPointDailyEveningData } from "./pointpointdailyeveningdata";
import { PointPointDailyMorningData } from "./pointpointdailymorningdata";
import { PointPointDailyStatsData } from "./pointpointdailystatsdata";
export declare class PointPointDailyData extends SpeakeasyBase {
    afternoon?: PointPointDailyAfternoonData;
    allDay: PointPointDailyAllDayData;
    astro: PointPointDailyAstroData;
    /**
     * Datetime in YYYY-MM-DDTHH:MM:SS format.
     */
    day?: Uint8Array;
    evening?: PointPointDailyEveningData;
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
    morning?: PointPointDailyMorningData;
    /**
     * Weather predictability. Values from 1 (very high predictability) to 5 (very low predictability).
     *
     * @remarks
     * Unit: 1-5
     */
    predictability?: number;
    statistics: PointPointDailyStatsData;
    /**
     * Short text summary of the weather, e.g. `Light rain`.
     */
    summary?: string;
    /**
     * All day string identifier of the weather icon, e.g. `light_rain`.
     */
    weather?: string;
}
