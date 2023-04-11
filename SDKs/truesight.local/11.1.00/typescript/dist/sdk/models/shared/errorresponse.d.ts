import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Forbidden operation
 */
export declare class ErrorResponse extends SpeakeasyBase {
    /**
     * The error's business identifier.
     */
    code?: string;
    /**
     * The timestamp of the error.
     */
    date?: Date;
    /**
     * The error message.
     */
    message?: string;
}
