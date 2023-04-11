import { SpeakeasyBase } from "../../../internal/utils";
export declare class BulkResponse extends SpeakeasyBase {
    /**
     * The HTTP code that corresponds to this item
     */
    code?: number;
    /**
     * A list of validation errors for this item (in case of error)
     */
    errors?: Record<string, any>;
    /**
     * The request data that belonged to this response (in case of error)
     */
    input?: Record<string, any>;
    /**
     * A human-readable error message (in case of error)
     */
    message?: string;
    /**
     * The resulting created/updated object (in case of success)
     */
    result?: Record<string, any>;
}
