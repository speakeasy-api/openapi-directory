package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceAccessControl
 * The access controls set on the resource.
**/
public class ResourceAccessControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpIamPolicy")
    public String gcpIamPolicy;
    public ResourceAccessControl withGcpIamPolicy(String gcpIamPolicy) {
        this.gcpIamPolicy = gcpIamPolicy;
        return this;
    }
}