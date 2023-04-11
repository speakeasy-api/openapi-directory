import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeScores } from "./attributescores";
import { Context } from "./context";
import { TextEntry } from "./textentry";
/**
 * The comment score suggestion request message.
 */
export declare class SuggestCommentScoreRequest extends SpeakeasyBase {
    /**
     * Attribute scores for the comment. The map keys are attribute names, same as the requested_attribute field in AnalyzeCommentRequest (for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as the `attribute_scores` field in AnalyzeCommentResponse. To specify an overall attribute score for the entire comment as a whole, use the `summary_score` field of the mapped AttributeScores object. To specify scores on specific subparts of the comment, use the `span_scores` field. All SpanScore objects must have begin and end fields set. All Score objects must be explicitly set (for binary classification, use the score values 0 and 1). If Score objects don't include a ScoreType, `PROBABILITY` is assumed. `attribute_scores` must not be empty. The mapped AttributeScores objects also must not be empty. An `INVALID_ARGUMENT` error is returned for all malformed requests.
     */
    attributeScores?: Record<string, AttributeScores>;
    /**
     * Opaque token that is echoed from the request to the response.
     */
    clientToken?: string;
    /**
     * Represents a body of text.
     */
    comment?: TextEntry;
    /**
     * Optional identifier associating this comment score suggestion with a particular sub-community. Different communities may have different norms and rules. Specifying this value enables training community-specific models.
     */
    communityId?: string;
    /**
     * Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
     */
    context?: Context;
    /**
     * The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Both ISO and BCP-47 language codes are accepted.
     */
    languages?: string[];
    /**
     * Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer.
     */
    sessionId?: string;
}
