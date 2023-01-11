package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ForwardInfo
 * Details of the final state "forward" and associated resource.
**/
public class ForwardInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUri")
    public String resourceUri;
    public ForwardInfo withResourceUri(String resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public ForwardInfoTargetEnum target;
    public ForwardInfo withTarget(ForwardInfoTargetEnum target) {
        this.target = target;
        return this;
    }
}