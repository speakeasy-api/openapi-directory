import { SpeakeasyBase } from "../../../internal/utils";
import { NADashboardData } from "./nadashboarddata";
import { NAPlace } from "./naplace";
import { NAStationModule } from "./nastationmodule";
export declare class NAMain extends SpeakeasyBase {
    id?: string;
    cipherId?: string;
    co2Calibrating?: boolean;
    dashboardData?: NADashboardData;
    dataType?: string[];
    dateSetup?: number;
    /**
     * true when the device is a user favorite and not owned by them
     */
    favorite?: boolean;
    firmware?: number;
    lastSetup?: number;
    lastStatusStore?: number;
    lastUpgrade?: number;
    moduleName?: string;
    modules?: NAStationModule[];
    place?: NAPlace;
    /**
     * true when the station was seen by the Netatmo cloud within the last 4 hours
     */
    reachable?: boolean;
    /**
     * true when the user was invited to (or has favorited) a station, false when the user owns it
     */
    readOnly?: boolean;
    stationName?: string;
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
    /**
     * It contains the current wifi status. The different thresholds to take into account are
     *
     * @remarks
     * RSSI_THRESHOLD_0 = 86 bad signal
     * RSSI_THRESHOLD_1 = 71 middle quality signal
     * RSSI_THRESHOLD_2 = 56 good signal
     *
     */
    wifiStatus?: number;
}
