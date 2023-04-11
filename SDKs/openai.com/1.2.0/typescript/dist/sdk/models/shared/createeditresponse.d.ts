import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEditResponseChoicesLogprobs extends SpeakeasyBase {
    textOffset?: number[];
    tokenLogprobs?: number[];
    tokens?: string[];
    topLogprobs?: Record<string, any>[];
}
export declare class CreateEditResponseChoices extends SpeakeasyBase {
    finishReason?: string;
    index?: number;
    logprobs?: CreateEditResponseChoicesLogprobs;
    text?: string;
}
export declare class CreateEditResponseUsage extends SpeakeasyBase {
    completionTokens: number;
    promptTokens: number;
    totalTokens: number;
}
/**
 * OK
 */
export declare class CreateEditResponse extends SpeakeasyBase {
    choices: CreateEditResponseChoices[];
    created: number;
    object: string;
    usage: CreateEditResponseUsage;
}
