package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2ApiTarget
 * A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
**/
public class V2ApiTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methods")
    public String[] methods;
    public V2ApiTarget withMethods(String[] methods) {
        this.methods = methods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public V2ApiTarget withService(String service) {
        this.service = service;
        return this;
    }
}