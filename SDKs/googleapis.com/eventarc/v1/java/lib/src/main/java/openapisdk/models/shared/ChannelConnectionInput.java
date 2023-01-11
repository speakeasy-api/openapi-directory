package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelConnectionInput
 * A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.
**/
public class ChannelConnectionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationToken")
    public String activationToken;
    public ChannelConnectionInput withActivationToken(String activationToken) {
        this.activationToken = activationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public ChannelConnectionInput withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ChannelConnectionInput withName(String name) {
        this.name = name;
        return this;
    }
}