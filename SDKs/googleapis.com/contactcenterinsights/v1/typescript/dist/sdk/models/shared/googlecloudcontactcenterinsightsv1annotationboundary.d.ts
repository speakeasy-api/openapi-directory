import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A point in a conversation that marks the start or the end of an annotation.
 */
export declare class GoogleCloudContactcenterinsightsV1AnnotationBoundary extends SpeakeasyBase {
    /**
     * The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero.
     */
    transcriptIndex?: number;
    /**
     * The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero.
     */
    wordIndex?: number;
}
