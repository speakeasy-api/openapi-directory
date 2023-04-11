import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a window of time using two timestamps: `earliest` and `latest`. This timestamp values are in RFC3339 text format.
 */
export declare class UpcomingMaintenanceTimeWindow extends SpeakeasyBase {
    earliest?: string;
    latest?: string;
}
