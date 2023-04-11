import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportSummary extends SpeakeasyBase {
    /**
     * in knots
     */
    averageSpeed?: number;
    deviceId?: number;
    deviceName?: string;
    /**
     * in meters
     */
    distance?: number;
    engineHours?: number;
    /**
     * in knots
     */
    maxSpeed?: number;
    /**
     * in liters
     */
    spentFuel?: number;
}
