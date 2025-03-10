/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StructuralElement - A StructuralElement describes content that provides structure to the document.
 */
public class StructuralElement {
    /**
     * The zero-based end index of this structural element, exclusive, in UTF-16 code units.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endIndex")
    public Integer endIndex;

    public StructuralElement withEndIndex(Integer endIndex) {
        this.endIndex = endIndex;
        return this;
    }
    
    /**
     * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paragraph")
    public Paragraph paragraph;

    public StructuralElement withParagraph(Paragraph paragraph) {
        this.paragraph = paragraph;
        return this;
    }
    
    /**
     * A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionBreak")
    public SectionBreak sectionBreak;

    public StructuralElement withSectionBreak(SectionBreak sectionBreak) {
        this.sectionBreak = sectionBreak;
        return this;
    }
    
    /**
     * The zero-based start index of this structural element, in UTF-16 code units.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;

    public StructuralElement withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    
    /**
     * A StructuralElement representing a table.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public Table table;

    public StructuralElement withTable(Table table) {
        this.table = table;
        return this;
    }
    
    /**
     * A StructuralElement representing a table of contents.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableOfContents")
    public TableOfContents tableOfContents;

    public StructuralElement withTableOfContents(TableOfContents tableOfContents) {
        this.tableOfContents = tableOfContents;
        return this;
    }
    
    public StructuralElement(){}
}
