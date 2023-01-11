package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataLabelMatcher
 * The matcher that is based on node metadata presented by xDS clients.
**/
public class MetadataLabelMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataLabelMatchCriteria")
    public MetadataLabelMatcherMetadataLabelMatchCriteriaEnum metadataLabelMatchCriteria;
    public MetadataLabelMatcher withMetadataLabelMatchCriteria(MetadataLabelMatcherMetadataLabelMatchCriteriaEnum metadataLabelMatchCriteria) {
        this.metadataLabelMatchCriteria = metadataLabelMatchCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataLabels")
    public MetadataLabels[] metadataLabels;
    public MetadataLabelMatcher withMetadataLabels(MetadataLabels[] metadataLabels) {
        this.metadataLabels = metadataLabels;
        return this;
    }
}