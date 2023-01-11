package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Telemetry
 * Configuration for how to query telemetry on a Service.
**/
public class Telemetry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public Telemetry withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}