package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfigInput
 * Network configuration for the Dataproc Metastore service.
**/
public class NetworkConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumers")
    public ConsumerInput[] consumers;
    public NetworkConfigInput withConsumers(ConsumerInput[] consumers) {
        this.consumers = consumers;
        return this;
    }
}