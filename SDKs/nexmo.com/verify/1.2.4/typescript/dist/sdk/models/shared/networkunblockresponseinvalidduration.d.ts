import { SpeakeasyBase } from "../../../internal/utils";
export declare class NetworkUnblockResponseInvalidDurationInvalidParameters extends SpeakeasyBase {
    /**
     * The name of the parameter.
     */
    name?: string;
    /**
     * The reason for the parameter error.
     */
    reason?: string;
}
/**
 * Invalid Duration
 */
export declare class NetworkUnblockResponseInvalidDuration extends SpeakeasyBase {
    /**
     * Verbose description of the server error.
     */
    detail?: string;
    /**
     * The Instance ID
     */
    instance?: string;
    /**
     * Detailed payload of errors.
     */
    invalidParameters?: NetworkUnblockResponseInvalidDurationInvalidParameters[];
    /**
     * Full string text of the HTTP error code.
     */
    title?: string;
    /**
     * A URL link to the API documentation for this type of error.
     */
    type?: string;
}
