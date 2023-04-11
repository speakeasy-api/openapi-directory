import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for a Ruleset.
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.
     */
    services?: string[];
}
