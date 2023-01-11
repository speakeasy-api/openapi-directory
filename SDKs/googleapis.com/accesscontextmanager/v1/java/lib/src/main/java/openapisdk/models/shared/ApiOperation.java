package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiOperation
 * Identification for an API Operation.
**/
public class ApiOperation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodSelectors")
    public MethodSelector[] methodSelectors;
    public ApiOperation withMethodSelectors(MethodSelector[] methodSelectors) {
        this.methodSelectors = methodSelectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public ApiOperation withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}