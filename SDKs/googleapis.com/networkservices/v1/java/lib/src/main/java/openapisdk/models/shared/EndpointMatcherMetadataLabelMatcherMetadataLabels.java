package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointMatcherMetadataLabelMatcherMetadataLabels
 * Defines a name-pair value for a single label.
**/
public class EndpointMatcherMetadataLabelMatcherMetadataLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelName")
    public String labelName;
    public EndpointMatcherMetadataLabelMatcherMetadataLabels withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelValue")
    public String labelValue;
    public EndpointMatcherMetadataLabelMatcherMetadataLabels withLabelValue(String labelValue) {
        this.labelValue = labelValue;
        return this;
    }
}