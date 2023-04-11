import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class Device extends SpeakeasyBase {
    attributes?: Record<string, any>;
    category?: string;
    contact?: string;
    disabled?: boolean;
    geofenceIds?: number[];
    groupId?: number;
    id?: number;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    lastUpdate?: Date;
    model?: string;
    name?: string;
    phone?: string;
    positionId?: number;
    status?: string;
    uniqueId?: string;
}
