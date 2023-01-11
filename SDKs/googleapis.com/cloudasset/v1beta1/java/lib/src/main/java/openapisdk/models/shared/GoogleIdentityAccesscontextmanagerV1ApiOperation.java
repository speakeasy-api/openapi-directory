package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1ApiOperation
 * Identification for an API Operation.
**/
public class GoogleIdentityAccesscontextmanagerV1ApiOperation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodSelectors")
    public GoogleIdentityAccesscontextmanagerV1MethodSelector[] methodSelectors;
    public GoogleIdentityAccesscontextmanagerV1ApiOperation withMethodSelectors(GoogleIdentityAccesscontextmanagerV1MethodSelector[] methodSelectors) {
        this.methodSelectors = methodSelectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public GoogleIdentityAccesscontextmanagerV1ApiOperation withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}