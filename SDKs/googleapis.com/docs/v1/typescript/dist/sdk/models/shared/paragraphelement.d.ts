import { SpeakeasyBase } from "../../../internal/utils";
import { AutoText } from "./autotext";
import { ColumnBreak } from "./columnbreak";
import { Equation } from "./equation";
import { FootnoteReference } from "./footnotereference";
import { HorizontalRule } from "./horizontalrule";
import { InlineObjectElement } from "./inlineobjectelement";
import { PageBreak } from "./pagebreak";
import { Person, PersonInput } from "./person";
import { RichLink, RichLinkInput } from "./richlink";
import { TextRun } from "./textrun";
/**
 * A ParagraphElement describes content within a Paragraph.
 */
export declare class ParagraphElement extends SpeakeasyBase {
    /**
     * A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.
     */
    autoText?: AutoText;
    /**
     * A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.
     */
    columnBreak?: ColumnBreak;
    /**
     * The zero-base end index of this paragraph element, exclusive, in UTF-16 code units.
     */
    endIndex?: number;
    /**
     * A ParagraphElement representing an equation.
     */
    equation?: Equation;
    /**
     * A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
     */
    footnoteReference?: FootnoteReference;
    /**
     * A ParagraphElement representing a horizontal line.
     */
    horizontalRule?: HorizontalRule;
    /**
     * A ParagraphElement that contains an InlineObject.
     */
    inlineObjectElement?: InlineObjectElement;
    /**
     * A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
     */
    pageBreak?: PageBreak;
    /**
     * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
     */
    person?: Person;
    /**
     * A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
     */
    richLink?: RichLink;
    /**
     * The zero-based start index of this paragraph element, in UTF-16 code units.
     */
    startIndex?: number;
    /**
     * A ParagraphElement that represents a run of text that all has the same styling.
     */
    textRun?: TextRun;
}
/**
 * A ParagraphElement describes content within a Paragraph.
 */
export declare class ParagraphElementInput extends SpeakeasyBase {
    /**
     * A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.
     */
    autoText?: AutoText;
    /**
     * A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.
     */
    columnBreak?: ColumnBreak;
    /**
     * The zero-base end index of this paragraph element, exclusive, in UTF-16 code units.
     */
    endIndex?: number;
    /**
     * A ParagraphElement representing an equation.
     */
    equation?: Equation;
    /**
     * A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
     */
    footnoteReference?: FootnoteReference;
    /**
     * A ParagraphElement representing a horizontal line.
     */
    horizontalRule?: HorizontalRule;
    /**
     * A ParagraphElement that contains an InlineObject.
     */
    inlineObjectElement?: InlineObjectElement;
    /**
     * A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
     */
    pageBreak?: PageBreak;
    /**
     * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
     */
    person?: PersonInput;
    /**
     * A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
     */
    richLink?: RichLinkInput;
    /**
     * The zero-based start index of this paragraph element, in UTF-16 code units.
     */
    startIndex?: number;
    /**
     * A ParagraphElement that represents a run of text that all has the same styling.
     */
    textRun?: TextRun;
}
