package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityActorClientSpecificActorInfo
 * Actor info specific to particular clients.
**/
public class ActivityActorClientSpecificActorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeActorInfo")
    public ActivityActorClientSpecificActorInfoYoutubeActorInfo youtubeActorInfo;
    public ActivityActorClientSpecificActorInfo withYoutubeActorInfo(ActivityActorClientSpecificActorInfoYoutubeActorInfo youtubeActorInfo) {
        this.youtubeActorInfo = youtubeActorInfo;
        return this;
    }
}