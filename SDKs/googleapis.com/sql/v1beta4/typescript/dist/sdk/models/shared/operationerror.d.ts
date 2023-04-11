import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Database instance operation error.
 */
export declare class OperationError extends SpeakeasyBase {
    /**
     * Identifies the specific error that occurred.
     */
    code?: string;
    /**
     * This is always `sql#operationError`.
     */
    kind?: string;
    /**
     * Additional information about the error encountered.
     */
    message?: string;
}
