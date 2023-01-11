package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointConfigInput
 * Endpoint config for this cluster
**/
public class EndpointConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableHttpPortAccess")
    public Boolean enableHttpPortAccess;
    public EndpointConfigInput withEnableHttpPortAccess(Boolean enableHttpPortAccess) {
        this.enableHttpPortAccess = enableHttpPortAccess;
        return this;
    }
}