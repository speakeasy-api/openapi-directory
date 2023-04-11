import { SpeakeasyBase } from "../../../internal/utils";
import { TimeMachinePointDailyStatsPrecipitationData } from "./timemachinepointdailystatsprecipitationdata";
import { TimeMachinePointDailyStatsTemperatureData } from "./timemachinepointdailystatstemperaturedata";
import { TimeMachinePointDailyStatsWindData } from "./timemachinepointdailystatswinddata";
export declare class TimeMachinePointDailyStatsData extends SpeakeasyBase {
    precipitation: TimeMachinePointDailyStatsPrecipitationData;
    temperature: TimeMachinePointDailyStatsTemperatureData;
    wind: TimeMachinePointDailyStatsWindData;
}
