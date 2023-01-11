package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfig
 * Network configuration for the Dataproc Metastore service.
**/
public class NetworkConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumers")
    public Consumer[] consumers;
    public NetworkConfig withConsumers(Consumer[] consumers) {
        this.consumers = consumers;
        return this;
    }
}