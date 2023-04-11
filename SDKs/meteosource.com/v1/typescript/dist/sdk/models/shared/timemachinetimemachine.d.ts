import { SpeakeasyBase } from "../../../internal/utils";
import { TimeMachinePointDailyStatsData } from "./timemachinepointdailystatsdata";
import { TimeMachineTimeMachineHourlyData } from "./timemachinetimemachinehourlydata";
/**
 * Successful Response
 */
export declare class TimeMachineTimeMachine extends SpeakeasyBase {
    data: TimeMachineTimeMachineHourlyData[];
    /**
     * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
     */
    elevation: number;
    /**
     * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
     */
    lat: string;
    /**
     * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
     */
    lon: string;
    statistics: TimeMachinePointDailyStatsData;
    /**
     * Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.
     */
    timezone?: string;
    /**
     * Unit system (metric, uk, ca or us)
     */
    units: string;
}
