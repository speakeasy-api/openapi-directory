import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The comment score suggestion response message.
 */
export declare class SuggestCommentScoreResponse extends SpeakeasyBase {
    /**
     * Same token from the original SuggestCommentScoreRequest.
     */
    clientToken?: string;
    /**
     * The list of languages detected from the comment text.
     */
    detectedLanguages?: string[];
    /**
     * The list of languages provided in the request.
     */
    requestedLanguages?: string[];
}
