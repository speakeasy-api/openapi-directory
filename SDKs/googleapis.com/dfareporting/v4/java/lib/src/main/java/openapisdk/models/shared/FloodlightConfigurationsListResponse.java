package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightConfigurationsListResponse
 * Floodlight Configuration List Response
**/
public class FloodlightConfigurationsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurations")
    public FloodlightConfiguration[] floodlightConfigurations;
    public FloodlightConfigurationsListResponse withFloodlightConfigurations(FloodlightConfiguration[] floodlightConfigurations) {
        this.floodlightConfigurations = floodlightConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FloodlightConfigurationsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}