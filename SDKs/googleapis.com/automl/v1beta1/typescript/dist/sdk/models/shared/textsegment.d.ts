import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.
 */
export declare class TextSegment extends SpeakeasyBase {
    /**
     * Output only. The content of the TextSegment.
     */
    content?: string;
    /**
     * Required. Zero-based character index of the first character past the end of the text segment (counting character from the beginning of the text). The character at the end_offset is NOT included in the text segment.
     */
    endOffset?: string;
    /**
     * Required. Zero-based character index of the first character of the text segment (counting characters from the beginning of the text).
     */
    startOffset?: string;
}
