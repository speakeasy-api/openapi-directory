package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationConfig
 * The configuration of the stream destination.
**/
public class DestinationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConnectionProfileName")
    public String destinationConnectionProfileName;
    public DestinationConfig withDestinationConnectionProfileName(String destinationConnectionProfileName) {
        this.destinationConnectionProfileName = destinationConnectionProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsDestinationConfig")
    public GcsDestinationConfig gcsDestinationConfig;
    public DestinationConfig withGcsDestinationConfig(GcsDestinationConfig gcsDestinationConfig) {
        this.gcsDestinationConfig = gcsDestinationConfig;
        return this;
    }
}