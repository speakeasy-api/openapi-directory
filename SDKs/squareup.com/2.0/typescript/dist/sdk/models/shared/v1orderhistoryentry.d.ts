import { SpeakeasyBase } from "../../../internal/utils";
/**
 * V1OrderHistoryEntry
 */
export declare class V1OrderHistoryEntry extends SpeakeasyBase {
    /**
     * The type of action performed on the order.
     */
    action?: string;
    /**
     * The time when the action was performed, in ISO 8601 format.
     */
    createdAt?: string;
}
