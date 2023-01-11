package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoPlayerSizeAssignedTargetingOptionDetails
 * Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.
**/
public class VideoPlayerSizeAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public VideoPlayerSizeAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoPlayerSize")
    public VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum videoPlayerSize;
    public VideoPlayerSizeAssignedTargetingOptionDetails withVideoPlayerSize(VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum videoPlayerSize) {
        this.videoPlayerSize = videoPlayerSize;
        return this;
    }
}