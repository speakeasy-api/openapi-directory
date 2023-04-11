import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Message sent
 */
export declare class Sms extends SpeakeasyBase {
    /**
     * The amount of messages in the request
     */
    messageCount?: string;
    messages?: Message[];
}
