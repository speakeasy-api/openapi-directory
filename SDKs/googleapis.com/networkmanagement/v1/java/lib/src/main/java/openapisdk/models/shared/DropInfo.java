package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DropInfo
 * Details of the final state "drop" and associated resource.
**/
public class DropInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public DropInfoCauseEnum cause;
    public DropInfo withCause(DropInfoCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUri")
    public String resourceUri;
    public DropInfo withResourceUri(String resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
}