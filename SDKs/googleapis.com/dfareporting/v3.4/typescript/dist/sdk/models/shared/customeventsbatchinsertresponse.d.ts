import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEventStatus } from "./customeventstatus";
/**
 * Insert Custom Events Response.
 */
export declare class CustomEventsBatchInsertResponse extends SpeakeasyBase {
    /**
     * Indicates that some or all custom events failed to insert.
     */
    hasFailures?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventsBatchInsertResponse".
     */
    kind?: string;
    /**
     * The insert status of each custom event. Statuses are returned in the same order that conversions are inserted.
     */
    status?: CustomEventStatus[];
}
