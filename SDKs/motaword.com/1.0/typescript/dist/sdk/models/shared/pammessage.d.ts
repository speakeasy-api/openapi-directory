import { SpeakeasyBase } from "../../../internal/utils";
export declare class PamMessage extends SpeakeasyBase {
    /**
     * the message to be sent
     */
    message?: string;
    /**
     * name of the recipients in the channel
     */
    recipients?: string[];
    /**
     * contexts for next message
     */
    slots?: string[];
    /**
     * id of the thread
     */
    threadId?: string;
    /**
     * the key for thread_id default is project
     */
    threadKey?: string;
}
