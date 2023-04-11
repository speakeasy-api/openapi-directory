import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The role of the author of this message.
 */
export declare enum ChatCompletionResponseMessageRoleEnum {
    System = "system",
    User = "user",
    Assistant = "assistant"
}
export declare class ChatCompletionResponseMessage extends SpeakeasyBase {
    /**
     * The contents of the message
     */
    content: string;
    /**
     * The role of the author of this message.
     */
    role: ChatCompletionResponseMessageRoleEnum;
}
