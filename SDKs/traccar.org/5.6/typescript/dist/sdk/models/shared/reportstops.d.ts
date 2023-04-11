import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportStops extends SpeakeasyBase {
    address?: string;
    deviceId?: number;
    deviceName?: string;
    duration?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    endTime?: Date;
    engineHours?: number;
    lat?: number;
    lon?: number;
    /**
     * in liters
     */
    spentFuel?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    startTime?: Date;
}
