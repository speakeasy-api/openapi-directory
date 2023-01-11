package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Api
 * This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.
**/
public class Api {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public String operation;
    public Api withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;
    public Api withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public Api withService(String service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Api withVersion(String version) {
        this.version = version;
        return this;
    }
}