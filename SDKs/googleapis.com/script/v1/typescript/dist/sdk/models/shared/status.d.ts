import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
 */
export declare class Status extends SpeakeasyBase {
    /**
     * The status code. For this API, this value either: - 10, indicating a `SCRIPT_TIMEOUT` error, - 3, indicating an `INVALID_ARGUMENT` error, or - 1, indicating a `CANCELLED` execution.
     */
    code?: number;
    /**
     * An array that contains a single ExecutionError object that provides information about the nature of the error.
     */
    details?: Record<string, any>[];
    /**
     * A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client.
     */
    message?: string;
}
