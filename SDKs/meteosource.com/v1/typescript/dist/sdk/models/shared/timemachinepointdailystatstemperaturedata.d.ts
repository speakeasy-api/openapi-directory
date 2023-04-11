import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeMachinePointDailyStatsTemperatureData extends SpeakeasyBase {
    /**
     * Long-term temperature average.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    avg?: number;
    /**
     * Long-term daily maximum temperature average.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    avgMax?: number;
    /**
     * Long-term daily minimum temperature average.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    avgMin?: number;
    /**
     * Historical daily maximum.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    recordMax?: number;
    /**
     * Historical daily minimum temperature.
     *
     * @remarks
     * Units: metric = °C, us = °F, uk = °C, ca = °C
     */
    recordMin?: number;
}
