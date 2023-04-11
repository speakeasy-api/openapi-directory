import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCompletionResponseChoicesLogprobs extends SpeakeasyBase {
    textOffset?: number[];
    tokenLogprobs?: number[];
    tokens?: string[];
    topLogprobs?: Record<string, any>[];
}
export declare class CreateCompletionResponseChoices extends SpeakeasyBase {
    finishReason?: string;
    index?: number;
    logprobs?: CreateCompletionResponseChoicesLogprobs;
    text?: string;
}
export declare class CreateCompletionResponseUsage extends SpeakeasyBase {
    completionTokens: number;
    promptTokens: number;
    totalTokens: number;
}
/**
 * OK
 */
export declare class CreateCompletionResponse extends SpeakeasyBase {
    choices: CreateCompletionResponseChoices[];
    created: number;
    id: string;
    model: string;
    object: string;
    usage?: CreateCompletionResponseUsage;
}
