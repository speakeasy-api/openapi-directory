import { SpeakeasyBase } from "../../../internal/utils";
import { PointPointDailyStatsPrecipitationData } from "./pointpointdailystatsprecipitationdata";
import { PointPointDailyStatsTemperatureData } from "./pointpointdailystatstemperaturedata";
import { PointPointDailyStatsWindData } from "./pointpointdailystatswinddata";
export declare class PointPointDailyStatsData extends SpeakeasyBase {
    precipitation: PointPointDailyStatsPrecipitationData;
    temperature: PointPointDailyStatsTemperatureData;
    wind: PointPointDailyStatsWindData;
}
