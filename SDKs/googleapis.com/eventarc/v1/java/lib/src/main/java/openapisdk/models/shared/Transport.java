package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transport
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
public class Transport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsub")
    public Pubsub pubsub;
    public Transport withPubsub(Pubsub pubsub) {
        this.pubsub = pubsub;
        return this;
    }
}