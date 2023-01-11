package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AbortInfo
 * Details of the final state "abort" and associated resource.
**/
public class AbortInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public AbortInfoCauseEnum cause;
    public AbortInfo withCause(AbortInfoCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectsMissingPermission")
    public String[] projectsMissingPermission;
    public AbortInfo withProjectsMissingPermission(String[] projectsMissingPermission) {
        this.projectsMissingPermission = projectsMissingPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUri")
    public String resourceUri;
    public AbortInfo withResourceUri(String resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
}