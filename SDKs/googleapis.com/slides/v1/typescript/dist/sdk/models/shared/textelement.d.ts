import { SpeakeasyBase } from "../../../internal/utils";
import { AutoText } from "./autotext";
import { ParagraphMarker } from "./paragraphmarker";
import { TextRun } from "./textrun";
/**
 * A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
 */
export declare class TextElement extends SpeakeasyBase {
    /**
     * A TextElement kind that represents auto text.
     */
    autoText?: AutoText;
    /**
     * The zero-based end index of this text element, exclusive, in Unicode code units.
     */
    endIndex?: number;
    /**
     * A TextElement kind that represents the beginning of a new paragraph.
     */
    paragraphMarker?: ParagraphMarker;
    /**
     * The zero-based start index of this text element, in Unicode code units.
     */
    startIndex?: number;
    /**
     * A TextElement kind that represents a run of text that all has the same styling.
     */
    textRun?: TextRun;
}
