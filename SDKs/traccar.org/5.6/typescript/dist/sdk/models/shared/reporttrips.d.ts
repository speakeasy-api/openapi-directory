import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportTrips extends SpeakeasyBase {
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
    driverName?: string;
    driverUniqueId?: number;
    duration?: number;
    endAddress?: string;
    endLat?: number;
    endLon?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    endTime?: Date;
    /**
     * in knots
     */
    maxSpeed?: number;
    /**
     * in liters
     */
    spentFuel?: number;
    startAddress?: string;
    startLat?: number;
    startLon?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    startTime?: Date;
}
