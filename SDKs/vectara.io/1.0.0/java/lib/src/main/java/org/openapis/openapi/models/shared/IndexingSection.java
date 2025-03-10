/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IndexingSection - A section within a structured document.
 */
public class IndexingSection {
    /**
     * A list of custom dimension values that are included in the generated
     * representation of all subsections (i.e. sections contains by this section).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDims")
    public VectaraindexingCustomDimension[] customDims;

    public IndexingSection withCustomDims(VectaraindexingCustomDimension[] customDims) {
        this.customDims = customDims;
        return this;
    }
    
    /**
     * Optionally, the unique ID of this section. If set, it will be returned as
     * metadata in query results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;

    public IndexingSection withId(Integer id) {
        this.id = id;
        return this;
    }
    
    /**
     * Metadata about this section. This should be a json string. It is passed
     * through the system, without being used at indexing time. It can be
     * retrieved at query time.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataJson")
    public String metadataJson;

    public IndexingSection withMetadataJson(String metadataJson) {
        this.metadataJson = metadataJson;
        return this;
    }
    
    /**
     * A list of subsections.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public IndexingSection[] section;

    public IndexingSection withSection(IndexingSection[] section) {
        this.section = section;
        return this;
    }
    
    /**
     * The text of the section. This should never be empty.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;

    public IndexingSection withText(String text) {
        this.text = text;
        return this;
    }
    
    /**
     * Optionally, the title of the section. This may be empty.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public IndexingSection withTitle(String title) {
        this.title = title;
        return this;
    }
    
    public IndexingSection(){}
}
