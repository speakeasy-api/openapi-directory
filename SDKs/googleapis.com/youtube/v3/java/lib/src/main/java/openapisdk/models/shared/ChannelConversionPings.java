package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelConversionPings
 * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
**/
public class ChannelConversionPings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pings")
    public ChannelConversionPing[] pings;
    public ChannelConversionPings withPings(ChannelConversionPing[] pings) {
        this.pings = pings;
        return this;
    }
}