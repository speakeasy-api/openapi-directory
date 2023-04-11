import { SpeakeasyBase } from "../../../internal/utils";
import { NADashboardData } from "./nadashboarddata";
import { NADate } from "./nadate";
import { NAHeatingSystem } from "./naheatingsystem";
import { NAHouseModel } from "./nahousemodel";
import { NAObject } from "./naobject";
import { NAPlace } from "./naplace";
import { NAThermProgram } from "./nathermprogram";
export declare class NADevice extends SpeakeasyBase {
    id?: string;
    behavior?: number;
    cipherId?: string;
    dashboardData?: NADashboardData;
    dataType?: string[];
    dateSetup?: NADate;
    firmware?: number;
    firstPidAvail?: boolean;
    heatingSystem?: NAHeatingSystem;
    houseModel?: NAHouseModel;
    hwVersion?: number;
    ip?: string;
    lastFwUpdate?: number;
    lastRadioStore?: number;
    lastStatusStore?: number;
    lastUpgrade?: number;
    moduleName?: string;
    /**
     * It lists which modules are linked with this device
     */
    modules?: string[];
    newFeatureAvail?: boolean;
    place?: NAPlace;
    publicExtData?: boolean;
    setpoint?: Record<string, any>;
    setpointDefaultDuration?: number;
    setpointOrder?: Record<string, NAObject[]>;
    stationName?: string;
    thermProgram?: Record<string, NAThermProgram>;
    thermProgramBackup?: Record<string, NAThermProgram[]>;
    thermProgramOrder?: Record<string, NAObject[]>;
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
    userOwner?: string[];
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
