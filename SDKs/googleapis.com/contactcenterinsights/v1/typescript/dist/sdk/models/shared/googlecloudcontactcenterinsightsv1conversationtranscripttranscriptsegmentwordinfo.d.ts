import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Word-level info for words in a transcript.
 */
export declare class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo extends SpeakeasyBase {
    /**
     * A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset.
     */
    confidence?: number;
    /**
     * Time offset of the end of this word relative to the beginning of the total conversation.
     */
    endOffset?: string;
    /**
     * Time offset of the start of this word relative to the beginning of the total conversation.
     */
    startOffset?: string;
    /**
     * The word itself. Includes punctuation marks that surround the word.
     */
    word?: string;
}
