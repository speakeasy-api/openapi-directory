import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class MessageResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    /**
     * Represents any chat message
     */
    message?: Record<string, any>;
}
