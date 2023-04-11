import { SpeakeasyBase } from "../../../internal/utils";
export declare class NADashboardData extends SpeakeasyBase {
    /**
     * Real measured pressure @ time_utc (in mb)
     */
    absolutePressure?: number;
    boilerOff?: number;
    boilerOn?: number;
    /**
     * Last Co2 measured @ time_utc (in ppm)
     */
    co2?: number;
    /**
     * Direction of the last 5 min highest gust wind
     */
    gustAngle?: number;
    /**
     * Speed of the last 5 min highest gust wind
     */
    gustStrength?: number;
    /**
     * Last humidity measured @ time_utc (in %)
     */
    humidity?: number;
    /**
     * Last noise measured @ time_utc (in db)
     */
    noise?: number;
    /**
     * Last Sea level pressure measured @ time_utc (in mb)
     */
    pressure?: number;
    /**
     * Last rain measured (in mm)
     */
    rain?: number;
    /**
     * Last temperature measure @ time_utc (in °C)
     */
    temperature?: number;
    /**
     * Current 5 min average wind direction measured @ time_utc (in °)
     */
    windAngle?: number;
    /**
     * Current 5 min average wind speed measured @ time_utc (in km/h)
     */
    windStrength?: number;
    /**
     * Timestamp when max temperature was measured
     */
    dateMaxTemp?: number;
    /**
     * Timestamp when max wind strength was measured
     */
    dateMaxWindStr?: number;
    /**
     * Timestamp when min temperature was measured
     */
    dateMinTemp?: number;
    deviceId?: number;
    /**
     * Current health index: 0 = Healthy, 1 = Fine, 2 = Fair, 3 = Poor, 4 = Unhealthy
     */
    healthIdx?: number;
    /**
     * Min temperature of the day (measured @ date_min_temp)
     */
    maxTemp?: number;
    maxWindStr?: number;
    /**
     * Max temperature of the day (measured @ date_max_temp)
     */
    minTemp?: number;
    /**
     * Pressure evolution trend
     */
    pressureTrend?: string;
    /**
     * Amount of rain in last hour
     */
    sumRain1?: number;
    /**
     * Amount of rain today
     */
    sumRain24?: number;
    /**
     * Temperature evolution trend
     */
    tempTrend?: string;
    timeUtc?: number;
}
