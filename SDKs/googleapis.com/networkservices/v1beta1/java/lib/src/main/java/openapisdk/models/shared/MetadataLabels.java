package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataLabels
 * Defines a name-pair value for a single label.
**/
public class MetadataLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelName")
    public String labelName;
    public MetadataLabels withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelValue")
    public String labelValue;
    public MetadataLabels withLabelValue(String labelValue) {
        this.labelValue = labelValue;
        return this;
    }
}