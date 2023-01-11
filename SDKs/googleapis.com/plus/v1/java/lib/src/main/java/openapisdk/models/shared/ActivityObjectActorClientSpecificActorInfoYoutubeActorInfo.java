package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo
 * Actor info specific to YouTube clients.
**/
public class ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}