import { SpeakeasyBase } from "../../../internal/utils";
import { TextSegment } from "./textsegment";
/**
 * Annotation for identifying spans of text.
 */
export declare class TextExtractionAnnotation extends SpeakeasyBase {
    /**
     * Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence in correctness of the annotation.
     */
    score?: number;
    /**
     * A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.
     */
    textSegment?: TextSegment;
}
