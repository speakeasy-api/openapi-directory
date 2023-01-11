package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationConfig
 * Define the Connectors target endpoint.
**/
public class DestinationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public Destination[] destinations;
    public DestinationConfig withDestinations(Destination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public DestinationConfig withKey(String key) {
        this.key = key;
        return this;
    }
}