package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointMatcher
 * A definition of a matcher that selects endpoints to which the policies should be applied.
**/
public class EndpointMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataLabelMatcher")
    public MetadataLabelMatcher metadataLabelMatcher;
    public EndpointMatcher withMetadataLabelMatcher(MetadataLabelMatcher metadataLabelMatcher) {
        this.metadataLabelMatcher = metadataLabelMatcher;
        return this;
    }
}