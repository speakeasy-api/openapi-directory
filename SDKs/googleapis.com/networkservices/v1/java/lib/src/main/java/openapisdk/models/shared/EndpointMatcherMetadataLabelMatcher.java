package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointMatcherMetadataLabelMatcher
 * The matcher that is based on node metadata presented by xDS clients.
**/
public class EndpointMatcherMetadataLabelMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataLabelMatchCriteria")
    public EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum metadataLabelMatchCriteria;
    public EndpointMatcherMetadataLabelMatcher withMetadataLabelMatchCriteria(EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum metadataLabelMatchCriteria) {
        this.metadataLabelMatchCriteria = metadataLabelMatchCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataLabels")
    public EndpointMatcherMetadataLabelMatcherMetadataLabels[] metadataLabels;
    public EndpointMatcherMetadataLabelMatcher withMetadataLabels(EndpointMatcherMetadataLabelMatcherMetadataLabels[] metadataLabels) {
        this.metadataLabels = metadataLabels;
        return this;
    }
}