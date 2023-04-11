import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Errors with some details for the given request
 */
export declare class ErrorModel extends SpeakeasyBase {
    /**
     * A more detailed message about why an error occurred
     */
    detail: string;
    /**
     * Standard HTTP Status returned with Error
     */
    status: number;
}
