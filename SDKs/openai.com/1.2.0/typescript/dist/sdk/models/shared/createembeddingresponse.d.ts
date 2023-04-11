import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEmbeddingResponseData extends SpeakeasyBase {
    embedding: number[];
    index: number;
    object: string;
}
export declare class CreateEmbeddingResponseUsage extends SpeakeasyBase {
    promptTokens: number;
    totalTokens: number;
}
/**
 * OK
 */
export declare class CreateEmbeddingResponse extends SpeakeasyBase {
    data: CreateEmbeddingResponseData[];
    model: string;
    object: string;
    usage: CreateEmbeddingResponseUsage;
}
