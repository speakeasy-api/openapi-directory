import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Request to send a message to specified target.
 */
export declare class SendMessageRequest extends SpeakeasyBase {
    /**
     * Message to send by Firebase Cloud Messaging Service.
     */
    message?: Message;
    /**
     * Flag for testing the request without actually delivering the message.
     */
    validateOnly?: boolean;
}
