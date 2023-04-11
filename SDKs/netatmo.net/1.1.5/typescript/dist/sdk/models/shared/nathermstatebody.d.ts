import { SpeakeasyBase } from "../../../internal/utils";
import { NASetpoint } from "./nasetpoint";
import { NAThermMeasure } from "./nathermmeasure";
import { NAThermProgram } from "./nathermprogram";
export declare class NAThermStateBody extends SpeakeasyBase {
    /**
     * It contains the current battery level in percentage.
     */
    batteryPercent?: number;
    batteryVp?: number;
    lastPlugSeen?: number;
    lastThermSeen?: number;
    measured?: NAThermMeasure;
    plugConnectedBoiler?: number;
    rfStatus?: number;
    setpoint?: NASetpoint;
    setpointOrder?: NASetpoint;
    thermOrientation?: number;
    thermProgram?: NAThermProgram;
    thermProgramBackup?: NAThermProgram[];
    thermProgramOrder?: NAThermProgram;
    thermRelayCmd?: number;
    udpConn?: boolean;
    wifiStatus?: number;
}
