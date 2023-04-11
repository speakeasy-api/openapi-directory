import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Forbidden
 */
export declare class NetworkUnblockResponseForbidden extends SpeakeasyBase {
    /**
     * Verbose description of the server error.
     */
    detail?: string;
    /**
     * The Instance ID
     */
    instance?: string;
    /**
     * Full string text of the HTTP error code.
     */
    title?: string;
    /**
     * A URL link to the API documentation for this type of error.
     */
    type?: string;
}
