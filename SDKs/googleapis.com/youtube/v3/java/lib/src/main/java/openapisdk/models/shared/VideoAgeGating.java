package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoAgeGating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alcoholContent")
    public Boolean alcoholContent;
    public VideoAgeGating withAlcoholContent(Boolean alcoholContent) {
        this.alcoholContent = alcoholContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restricted")
    public Boolean restricted;
    public VideoAgeGating withRestricted(Boolean restricted) {
        this.restricted = restricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoGameRating")
    public VideoAgeGatingVideoGameRatingEnum videoGameRating;
    public VideoAgeGating withVideoGameRating(VideoAgeGatingVideoGameRatingEnum videoGameRating) {
        this.videoGameRating = videoGameRating;
        return this;
    }
}