package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Channel
 * Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
**/
public class Channel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelType")
    public ChannelChannelTypeEnum channelType;
    public Channel withChannelType(ChannelChannelTypeEnum channelType) {
        this.channelType = channelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Channel withName(String name) {
        this.name = name;
        return this;
    }
}