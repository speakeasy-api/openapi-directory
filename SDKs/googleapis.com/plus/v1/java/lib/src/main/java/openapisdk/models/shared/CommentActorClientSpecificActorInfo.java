package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentActorClientSpecificActorInfo
 * Actor info specific to particular clients.
**/
public class CommentActorClientSpecificActorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeActorInfo")
    public CommentActorClientSpecificActorInfoYoutubeActorInfo youtubeActorInfo;
    public CommentActorClientSpecificActorInfo withYoutubeActorInfo(CommentActorClientSpecificActorInfoYoutubeActorInfo youtubeActorInfo) {
        this.youtubeActorInfo = youtubeActorInfo;
        return this;
    }
}