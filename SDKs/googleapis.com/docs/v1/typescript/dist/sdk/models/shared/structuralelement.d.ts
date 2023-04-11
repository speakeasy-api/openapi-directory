import { SpeakeasyBase } from "../../../internal/utils";
import { Paragraph, ParagraphInput } from "./paragraph";
import { SectionBreak } from "./sectionbreak";
import { Table } from "./table";
import { TableOfContents } from "./tableofcontents";
/**
 * A StructuralElement describes content that provides structure to the document.
 */
export declare class StructuralElement extends SpeakeasyBase {
    /**
     * The zero-based end index of this structural element, exclusive, in UTF-16 code units.
     */
    endIndex?: number;
    /**
     * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
     */
    paragraph?: Paragraph;
    /**
     * A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.
     */
    sectionBreak?: SectionBreak;
    /**
     * The zero-based start index of this structural element, in UTF-16 code units.
     */
    startIndex?: number;
    /**
     * A StructuralElement representing a table.
     */
    table?: Table;
    /**
     * A StructuralElement representing a table of contents.
     */
    tableOfContents?: TableOfContents;
}
/**
 * A StructuralElement describes content that provides structure to the document.
 */
export declare class StructuralElementInput extends SpeakeasyBase {
    /**
     * The zero-based end index of this structural element, exclusive, in UTF-16 code units.
     */
    endIndex?: number;
    /**
     * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
     */
    paragraph?: ParagraphInput;
    /**
     * A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.
     */
    sectionBreak?: SectionBreak;
    /**
     * The zero-based start index of this structural element, in UTF-16 code units.
     */
    startIndex?: number;
    /**
     * A StructuralElement representing a table.
     */
    table?: Table;
    /**
     * A StructuralElement representing a table of contents.
     */
    tableOfContents?: TableOfContents;
}
