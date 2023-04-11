import { SpeakeasyBase } from "../../../internal/utils";
import { NADashboardData } from "./nadashboarddata";
import { NAPlace } from "./naplace";
export declare class NAHealthyHomeCoach extends SpeakeasyBase {
    id?: string;
    cipherId?: string;
    co2Calibrating?: boolean;
    dashboardData?: NADashboardData;
    dataType?: string[];
    dateSetup?: number;
    firmware?: number;
    lastSetup?: number;
    lastStatusStore?: number;
    lastUpgrade?: number;
    name?: string;
    place?: NAPlace;
    /**
     * Included in every device or module. It defines the type of the device/module. Its values are among :
     *
     * @remarks
     * NHC: Healthy Home Coach
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
