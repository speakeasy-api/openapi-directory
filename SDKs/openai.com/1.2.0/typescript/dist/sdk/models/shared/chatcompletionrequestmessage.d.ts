import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The role of the author of this message.
 */
export declare enum ChatCompletionRequestMessageRoleEnum {
    System = "system",
    User = "user",
    Assistant = "assistant"
}
export declare class ChatCompletionRequestMessage extends SpeakeasyBase {
    /**
     * The contents of the message
     */
    content: string;
    /**
     * The name of the user in a multi-user chat
     */
    name?: string;
    /**
     * The role of the author of this message.
     */
    role: ChatCompletionRequestMessageRoleEnum;
}
