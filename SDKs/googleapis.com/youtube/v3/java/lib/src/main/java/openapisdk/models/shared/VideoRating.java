package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoRating
 * Basic details about rating of a video.
**/
public class VideoRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public VideoRatingRatingEnum rating;
    public VideoRating withRating(VideoRatingRatingEnum rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public VideoRating withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}