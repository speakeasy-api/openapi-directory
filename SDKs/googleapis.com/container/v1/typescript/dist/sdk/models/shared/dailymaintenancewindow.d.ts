import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Time window specified for daily maintenance operations.
 */
export declare class DailyMaintenanceWindow extends SpeakeasyBase {
    /**
     * [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario. Duration will be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format "PTnHnMnS".
     */
    duration?: string;
    /**
     * Time within the maintenance window to start the maintenance operations. Time format should be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format "HH:MM", where HH : [00-23] and MM : [00-59] GMT.
     */
    startTime?: string;
}
