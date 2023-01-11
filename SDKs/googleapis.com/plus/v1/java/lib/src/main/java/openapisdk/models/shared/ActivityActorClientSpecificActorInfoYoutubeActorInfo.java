package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityActorClientSpecificActorInfoYoutubeActorInfo
 * Actor info specific to YouTube clients.
**/
public class ActivityActorClientSpecificActorInfoYoutubeActorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public ActivityActorClientSpecificActorInfoYoutubeActorInfo withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}