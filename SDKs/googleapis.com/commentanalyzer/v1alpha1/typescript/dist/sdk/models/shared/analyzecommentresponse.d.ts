import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeScores } from "./attributescores";
/**
 * The comment analysis response message.
 */
export declare class AnalyzeCommentResponse extends SpeakeasyBase {
    /**
     * Scores for the requested attributes. The map keys are attribute names (same as the requested_attribute field in AnalyzeCommentRequest, for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc).
     */
    attributeScores?: Record<string, AttributeScores>;
    /**
     * Same token from the original AnalyzeCommentRequest.
     */
    clientToken?: string;
    /**
     * Contains the languages detected from the text content, sorted in order of likelihood.
     */
    detectedLanguages?: string[];
    /**
     * The language(s) used by CommentAnalyzer service to choose which Model to use when analyzing the comment. Might better be called "effective_languages". The logic used to make the choice is as follows: if !Request.languages.empty() effective_languages = Request.languages else effective_languages = detected_languages[0]
     */
    languages?: string[];
}
