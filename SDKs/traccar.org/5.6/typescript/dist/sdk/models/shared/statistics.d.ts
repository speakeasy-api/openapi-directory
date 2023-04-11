import { SpeakeasyBase } from "../../../internal/utils";
export declare class Statistics extends SpeakeasyBase {
    activeDevices?: number;
    activeUsers?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    captureTime?: Date;
    messagesReceived?: number;
    messagesStored?: number;
    requests?: number;
}
