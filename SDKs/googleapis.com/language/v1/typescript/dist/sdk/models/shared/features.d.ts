import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationModelOptions } from "./classificationmodeloptions";
/**
 * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
 */
export declare class Features extends SpeakeasyBase {
    /**
     * Model options available for classification requests.
     */
    classificationModelOptions?: ClassificationModelOptions;
    /**
     * Classify the full document into categories.
     */
    classifyText?: boolean;
    /**
     * Extract document-level sentiment.
     */
    extractDocumentSentiment?: boolean;
    /**
     * Extract entities.
     */
    extractEntities?: boolean;
    /**
     * Extract entities and their associated sentiment.
     */
    extractEntitySentiment?: boolean;
    /**
     * Extract syntax information.
     */
    extractSyntax?: boolean;
}
