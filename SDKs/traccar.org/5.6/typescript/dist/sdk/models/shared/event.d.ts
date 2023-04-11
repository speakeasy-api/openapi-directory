import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class Event extends SpeakeasyBase {
    attributes?: Record<string, any>;
    deviceId?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    eventTime?: Date;
    geofenceId?: number;
    id?: number;
    maintenanceId?: number;
    positionId?: number;
    type?: string;
}
