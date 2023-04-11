import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Binary log coordinates.
 */
export declare class BinLogCoordinates extends SpeakeasyBase {
    /**
     * Name of the binary log file for a Cloud SQL instance.
     */
    binLogFileName?: string;
    /**
     * Position (offset) within the binary log file.
     */
    binLogPosition?: string;
    /**
     * This is always `sql#binLogCoordinates`.
     */
    kind?: string;
}
