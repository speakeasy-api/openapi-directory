import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bad Request.
 */
export declare class PartnerError extends SpeakeasyBase {
    /**
     * True when an error occurs.
     */
    error?: boolean;
    /**
     * Field causing the error.
     */
    field?: string;
    /**
     * Message describing the error.
     */
    message?: string;
}
