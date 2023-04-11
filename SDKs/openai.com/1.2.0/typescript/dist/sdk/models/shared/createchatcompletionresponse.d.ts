import { SpeakeasyBase } from "../../../internal/utils";
import { ChatCompletionResponseMessage } from "./chatcompletionresponsemessage";
export declare class CreateChatCompletionResponseChoices extends SpeakeasyBase {
    finishReason?: string;
    index?: number;
    message?: ChatCompletionResponseMessage;
}
export declare class CreateChatCompletionResponseUsage extends SpeakeasyBase {
    completionTokens: number;
    promptTokens: number;
    totalTokens: number;
}
/**
 * OK
 */
export declare class CreateChatCompletionResponse extends SpeakeasyBase {
    choices: CreateChatCompletionResponseChoices[];
    created: number;
    id: string;
    model: string;
    object: string;
    usage?: CreateChatCompletionResponseUsage;
}
