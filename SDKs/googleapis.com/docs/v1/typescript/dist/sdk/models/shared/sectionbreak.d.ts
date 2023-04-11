import { SpeakeasyBase } from "../../../internal/utils";
import { SectionStyle } from "./sectionstyle";
/**
 * A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.
 */
export declare class SectionBreak extends SpeakeasyBase {
    /**
     * The styling that applies to a section.
     */
    sectionStyle?: SectionStyle;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[];
}
