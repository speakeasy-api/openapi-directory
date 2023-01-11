package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransportInput
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
public class TransportInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsub")
    public PubsubInput pubsub;
    public TransportInput withPubsub(PubsubInput pubsub) {
        this.pubsub = pubsub;
        return this;
    }
}