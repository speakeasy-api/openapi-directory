import { SpeakeasyBase } from "../../../internal/utils";
/**
 * (yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates
 */
export declare class CreatedAt extends SpeakeasyBase {
    /**
     * (yyyy-mm-dd hh:mm:ss) return tracks created at this date or later
     */
    from?: string;
    /**
     * (yyyy-mm-dd hh:mm:ss) return tracks created at this date or earlier
     */
    to?: string;
}
