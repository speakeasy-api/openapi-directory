import { SpeakeasyBase } from "../../../internal/utils";
export declare class MaintenanceStatusConnectionServices extends SpeakeasyBase {
    name: string;
    number: number;
}
/**
 * Response
 */
export declare class MaintenanceStatus extends SpeakeasyBase {
    connectionServices?: MaintenanceStatusConnectionServices[];
    scheduledTime?: string;
    status?: string;
}
