package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceFilter
 * Message describing resource filters
**/
public class ResourceFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gceInstanceFilter")
    public GceInstanceFilter gceInstanceFilter;
    public ResourceFilter withGceInstanceFilter(GceInstanceFilter gceInstanceFilter) {
        this.gceInstanceFilter = gceInstanceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclusionLabels")
    public java.util.Map<String, String> inclusionLabels;
    public ResourceFilter withInclusionLabels(java.util.Map<String, String> inclusionLabels) {
        this.inclusionLabels = inclusionLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIdPatterns")
    public String[] resourceIdPatterns;
    public ResourceFilter withResourceIdPatterns(String[] resourceIdPatterns) {
        this.resourceIdPatterns = resourceIdPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public ResourceFilter withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
}