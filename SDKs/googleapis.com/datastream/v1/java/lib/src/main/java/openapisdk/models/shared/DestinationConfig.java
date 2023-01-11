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
    @JsonProperty("bigqueryDestinationConfig")
    public BigQueryDestinationConfig bigqueryDestinationConfig;
    public DestinationConfig withBigqueryDestinationConfig(BigQueryDestinationConfig bigqueryDestinationConfig) {
        this.bigqueryDestinationConfig = bigqueryDestinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConnectionProfile")
    public String destinationConnectionProfile;
    public DestinationConfig withDestinationConnectionProfile(String destinationConnectionProfile) {
        this.destinationConnectionProfile = destinationConnectionProfile;
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