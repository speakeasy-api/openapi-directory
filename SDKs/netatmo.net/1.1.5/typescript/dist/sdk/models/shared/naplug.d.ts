import { SpeakeasyBase } from "../../../internal/utils";
import { NAPlace } from "./naplace";
import { NAThermostat } from "./nathermostat";
import { NAYearMonth } from "./nayearmonth";
export declare class NAPlug extends SpeakeasyBase {
    id?: string;
    firmware?: number;
    lastBilan?: NAYearMonth;
    lastPlugSeen?: number;
    lastStatusStore?: number;
    modules?: NAThermostat[];
    place?: NAPlace;
    plugConnectedBoiler?: number;
    stationName?: string;
    syncing?: boolean;
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
    udpConn?: boolean;
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
