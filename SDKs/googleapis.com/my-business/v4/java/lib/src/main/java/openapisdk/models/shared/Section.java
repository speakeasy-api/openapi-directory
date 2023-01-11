package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Section
 * A section of the price list containing one or more items.
**/
public class Section {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Item[] items;
    public Section withItems(Item[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public Label[] labels;
    public Section withLabels(Label[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionId")
    public String sectionId;
    public Section withSectionId(String sectionId) {
        this.sectionId = sectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionType")
    public SectionSectionTypeEnum sectionType;
    public Section withSectionType(SectionSectionTypeEnum sectionType) {
        this.sectionType = sectionType;
        return this;
    }
}