package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliverInfo
 * Details of the final state "deliver" and associated resource.
**/
public class DeliverInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUri")
    public String resourceUri;
    public DeliverInfo withResourceUri(String resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public DeliverInfoTargetEnum target;
    public DeliverInfo withTarget(DeliverInfoTargetEnum target) {
        this.target = target;
        return this;
    }
}