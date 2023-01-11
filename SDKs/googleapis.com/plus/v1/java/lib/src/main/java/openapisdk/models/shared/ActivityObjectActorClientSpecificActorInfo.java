package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectActorClientSpecificActorInfo
 * Actor info specific to particular clients.
**/
public class ActivityObjectActorClientSpecificActorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeActorInfo")
    public ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo youtubeActorInfo;
    public ActivityObjectActorClientSpecificActorInfo withYoutubeActorInfo(ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo youtubeActorInfo) {
        this.youtubeActorInfo = youtubeActorInfo;
        return this;
    }
}