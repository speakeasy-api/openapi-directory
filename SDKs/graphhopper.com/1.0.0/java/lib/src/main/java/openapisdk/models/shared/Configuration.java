package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Configuration
 * Specifies general configurations that are taken into account when solving the vehicle routing problem.
**/
public class Configuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing")
    public Routing routing;
    public Configuration withRouting(Routing routing) {
        this.routing = routing;
        return this;
    }
}