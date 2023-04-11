import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class SyncResponse extends SpeakeasyBase {
    duration: string;
    /**
     * List of events
     */
    events: Record<string, any>[];
    /**
     * List of CIDs that user can't access
     */
    inaccessibleCids?: string[];
}
