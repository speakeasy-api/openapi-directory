package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelInput
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
**/
public class ChannelInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyName")
    public String cryptoKeyName;
    public ChannelInput withCryptoKeyName(String cryptoKeyName) {
        this.cryptoKeyName = cryptoKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ChannelInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;
    public ChannelInput withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}