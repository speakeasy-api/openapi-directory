package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MethodSelector
 * An allowed method or permission of a service specified in ApiOperation.
**/
public class MethodSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public MethodSelector withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public String permission;
    public MethodSelector withPermission(String permission) {
        this.permission = permission;
        return this;
    }
}