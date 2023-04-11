import { SpeakeasyBase } from "../../../internal/utils";
import { NADashboardData } from "./nadashboarddata";
export declare class NAStationModule extends SpeakeasyBase {
    id?: string;
    /**
     * It contains the current battery level in percentage.
     */
    batteryPercent?: number;
    /**
     * It contains the current battery status. The threshold depends on the kind of module, below is the list of the different threshold to take into account according the module type.
     *
     * @remarks
     * "Indoor module Battery range: 6000 ... 4200" |
     * INDOOR_BATTERY_LEVEL_FULL = 5640
     * INDOOR_BATTERY_LEVEL_HIGH = 5280
     * INDOOR_BATTERY_LEVEL_MEDIUM = 4920
     * INDOOR_BATTERY_LEVEL_LOW = 4560
     * "Below 4560: very low" |
     *
     * "Raingauge and outdoor module Battery range: 6000 ... 3600" |
     * BATTERY_LEVEL_FULL = 5500
     * BATTERY_LEVEL_HIGH = 5000
     * BATTERY_LEVEL_MEDIUM = 4500
     * BATTERY_LEVEL_LOW = 4000
     * "Below 4000: very low" |
     *
     * "Thermostat Battery range: 4500 ... 3000" |
     * THERMOSTAT_BATTERY_LEVEL_FULL = 4100
     * THERMOSTAT_BATTERY_LEVEL_HIGH = 3600
     * THERMOSTAT_BATTERY_LEVEL_MEDIUM = 3300
     * THERMOSTAT_BATTERY_LEVEL_LOW = 3000
     * "Below 3000: very low"
     *
     */
    batteryVp?: number;
    dashboardData?: NADashboardData;
    dataType?: string[];
    firmware?: number;
    lastMessage?: number;
    lastSeen?: number;
    lastSetup?: number;
    moduleName?: string;
    /**
     * true when the station was seen by the Netatmo cloud within the last 4 hours
     */
    reachable?: boolean;
    /**
     * "It contains the current radio status. The different thresholds to take into account are :" |
     *
     * @remarks
     * RADIO_THRESHOLD_SIGNAL_LOW = 90
     * RADIO_THRESHOLD_SIGNAL_MEDIUM = 80
     * RADIO_THRESHOLD_SIGNAL_HIGH = 70
     * RADIO_THRESHOLD_SIGNAL_FULL = 60
     *
     */
    rfStatus?: number;
    /**
     * Included in every device or module. It defines the type of the device/module. Its values are among :
     *
     * @remarks
     * NAMain : for the base station
     * NAModule1 : for the outdoor module
     * NAModule4 : for the additionnal indoor module
     * NAModule3 : for the rain gauge module
     * NAPlug : for the thermostat relay/plug
     * NATherm1 : for the thermostat module
     *
     */
    type?: string;
}
