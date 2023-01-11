package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoPlayerSizeTargetingOptionDetails
 * Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`.
**/
public class VideoPlayerSizeTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoPlayerSize")
    public VideoPlayerSizeTargetingOptionDetailsVideoPlayerSizeEnum videoPlayerSize;
    public VideoPlayerSizeTargetingOptionDetails withVideoPlayerSize(VideoPlayerSizeTargetingOptionDetailsVideoPlayerSizeEnum videoPlayerSize) {
        this.videoPlayerSize = videoPlayerSize;
        return this;
    }
}